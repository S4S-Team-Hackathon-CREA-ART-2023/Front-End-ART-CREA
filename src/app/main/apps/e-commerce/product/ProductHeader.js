import React from 'react'
import Button from '@mui/material/Button';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import _ from '@lodash';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { removeProduct, saveProduct } from '../store/productSlice';
import { Checkbox, FormControlLabel } from '@mui/material';

function ProductHeader({changePersonToEnterprise,setChangePersonToEnterprise}) {
  
  const dispatch = useDispatch();
  const methods = useFormContext();
  const { formState, watch, getValues } = methods;
  const { isValid, dirtyFields } = formState;
  const featuredImageId = watch('featuredImageId');
  const images = watch('images');
  const name = watch('name');
  const theme = useTheme();
  const navigate = useNavigate();

  function handleSaveProduct() {
    dispatch(saveProduct(getValues()));
  }

  function handleRemoveProduct() {
    dispatch(removeProduct()).then(() => {
      navigate('/apps/e-commerce/products');
    });
  }
  const nomeArquivo = 'ARTEXEMPLO.txt';
  const conteudoArquivo = 'Resultado ART';

  function downloadArquivoInterno(nomeArquivo, conteudoArquivo) {
    // Cria um elemento de âncora invisível
    var link = document.createElement('https://www.sendspace.com/file/is98m9');
    link.style.display = 'none';
    
    // Define o nome do arquivo
    link.download = nomeArquivo;
    
    // Cria um Blob com o conteúdo do arquivo
    var blob = new Blob([conteudoArquivo], { type: 'application/octet-stream' });
    
    // Define o URL do objeto Blob como a origem do link de download
    link.href = URL.createObjectURL(blob);
    
    // Adiciona o link ao documento
    document.body.appendChild(link);
    
    // Simula o clique no link
    link.click();
    
    // Remove o link do documento
    document.body.removeChild(link);
  }
  

  return (
    <div className="flex flex-col sm:flex-row flex-1 w-full items-center justify-between space-y-8 sm:space-y-0 py-32 px-24 md:px-32">
      <div className="flex flex-col items-center sm:items-start space-y-8 sm:space-y-0 w-full sm:max-w-full min-w-0">
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1, transition: { delay: 0.3 } }}
        >
          <Typography
            className="flex items-center sm:mb-12"
            component={Link}
            role="button"
            to="/apps/e-commerce/products"
            color="inherit"
          >
            <FuseSvgIcon size={20}>
              {theme.direction === 'ltr'
                ? 'heroicons-outline:arrow-sm-left'
                : 'heroicons-outline:arrow-sm-right'}
            </FuseSvgIcon>
            <span className="flex mx-4 font-medium">Cadastrar nova ART</span>
          </Typography>
        </motion.div>

        <div className="flex items-center max-w-full">
          <motion.div
            className="hidden sm:flex"
            initial={{ scale: 0 }}
            animate={{ scale: 1, transition: { delay: 0.3 } }}
          >
            {images.length > 0 && featuredImageId ? (
              <img
                className="w-32 sm:w-48 rounded"
                src={_.find(images, { id: featuredImageId }).url}
                alt={name}
              />
            ) : (
              <img
                className="w-32 sm:w-48 rounded"
                src="assets/images/apps/ecommerce/product-image-placeholder.png"
                alt={name}
              />
            )}
          </motion.div>
          <motion.div
            className="flex flex-col items-center sm:items-start min-w-0 mx-8 sm:mx-16"
            initial={{ x: -20 }}
            animate={{ x: 0, transition: { delay: 0.3 } }}
          >
            <Typography className="text-16 sm:text-20 truncate font-semibold">
              {name || 'Nova ART'}
            </Typography>
            <Typography variant="caption" className="font-medium">
              Modelagem padrão de ART
            </Typography>

            <div>
            <FormControlLabel control={
              <Checkbox 
              onClick={ () => setChangePersonToEnterprise(!changePersonToEnterprise) }
              checked={changePersonToEnterprise === true ? true : false }
              />
              } 
            label="Pessoa Física" />
            <FormControlLabel 
              control={
              <Checkbox 
              onClick={ () => setChangePersonToEnterprise(!changePersonToEnterprise) }
              checked={changePersonToEnterprise === false ? true : false }
              />
              } 
              label="Pessoa Jurídica" />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.div
        className="flex"
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0, transition: { delay: 0.3 } }}
      >
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          onClick={handleRemoveProduct}
          startIcon={<FuseSvgIcon className="hidden sm:flex">heroicons-outline:trash</FuseSvgIcon>}
        >
          Excluir
        </Button>
        <Button
          className="whitespace-nowrap mx-4"
          variant="contained"
          color="secondary"
          onClick={ () => console.log("salvou")}
        >
          Salvar
        </Button>
      </motion.div>
    </div>
  );
}

export default ProductHeader;

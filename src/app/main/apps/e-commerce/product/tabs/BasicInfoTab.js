import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Controller, useFormContext } from 'react-hook-form';

const nivelAtividades = [
  { title: 'Assessoria', year: 1994 },
  { title: 'Concepção', year: 1994 },
  { title: 'Direção de Obra', year: 1994 },
]

const optionsAtividades = nivelAtividades.map((option) => {
  const firstLetter = option.title[0].toUpperCase();
  return {
    firstLetter: /[0-9]/.test(firstLetter) ? '0-9' : firstLetter,
    ...option,
  };
});

function BasicInfoTab(props) {
  const methods = useFormContext();
  const { control, formState } = methods;
  const { errors } = formState;
  return (
    <div className='w-screen grid grid-rows-4 grid-flow-col gap-y-32 px-320 mr-288'>
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['COD101 - OBRA / SERVIÇO']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="DOCUMENTO DE RESPONSABILIDADE TÉCNICA" />}
    />


    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['NENHUMA - NÃO OPTANTE', 'CLUBE DE ENGENHARIA DO CEARA (CEC)']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="ENTIDADE DE CLASSE" />}
    />


    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['INICIAL']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="FORMA DE REGISTRO" />}
    />


    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['NENHUMA - NÃO OPTANTE']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="AÇÃO INSTITUCIONAL (CONVÊNIO)" />}
    />
      <Autocomplete
      id="grouped-demo"
      options={ optionsAtividades.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
      groupBy={(option) => option.firstLetter}
      getOptionLabel={(option) => option.title}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="NÍVEL ATIVIDADE" />}
    />

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['NENHUMA - NÃO OPTANTE']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="CÓDIGO DA ATIVDADE" />}
    />

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['Aferição', 'Análise', 'Anteprojeto']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="ATIVIDADE PROFISSIONAL" />}
    />

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['a - ano', 'cal- Caloria', 'btu- Btu']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="UNIDADE DE MEDIDA" />}
    />


    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['NENHUMA - NÃO OPTANTE']}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="ATIVIDADE" />}
    />

      

      {/* <Controller
        name="categories"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            options={[]}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select multiple categories"
                label="Categories"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
      />

      <Controller
        name="tags"
        control={control}
        defaultValue={[]}
        render={({ field: { onChange, value } }) => (
          <Autocomplete
            className="mt-8 mb-16"
            multiple
            freeSolo
            options={[]}
            value={value}
            onChange={(event, newValue) => {
              onChange(newValue);
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Select multiple tags"
                label="Tags"
                variant="outlined"
                InputLabelProps={{
                  shrink: true,
                }}
              />
            )}
          />
        )}
      /> */}
    </div>
  );
}

export default BasicInfoTab;

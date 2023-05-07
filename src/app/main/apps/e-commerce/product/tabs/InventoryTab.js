import TextField from '@mui/material/TextField';
import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete } from '@mui/material';

function InventoryTab({changePersonToEnterprise}) {
  const methods = useFormContext();
  const { control } = methods;

  return (
    <>
    {
      changePersonToEnterprise ? 
      (
        <>
        <div>
      <Controller
        name="sku"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Nome Completo"
            value="s4S test user"
            autoFocus
            id="sku"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="quantity"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="CPF"
            id="quantity"
            value="9999999999-9"
            variant="outlined"
            type="string"
            fullWidth
          />
        )}
      />

      <Controller
        name="sku"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Data de nascimento"
            autoFocus
            value="15/03/1997"
            id="sku"
            variant="outlined"
            fullWidth
          />
        )}
      />

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['Profissional']}
      value={"Profissional"}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Tipo da tratativa" />}
    />
    </div>
        </>
      ) : (
        <>
                <div>
      <Controller
        name="sku"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Nome Fantasia"
            value="s4S team"
            autoFocus
            id="sku"
            variant="outlined"
            fullWidth
          />
        )}
      />

      <Controller
        name="quantity"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            label="CNPJ"
            id="quantity"
            value=" 99.999.999/9999-99,"
            variant="outlined"
            type="string"
            fullWidth
          />
        )}
      />

      <Controller
        name="sku"
        control={control}
        render={({ field }) => (
          <TextField
            {...field}
            className="mt-8 mb-16"
            required
            label="Criação CNPJ"
            autoFocus
            value="10/01/2005"
            id="sku"
            variant="outlined"
            fullWidth
          />
        )}
      />

    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={['Profissional']}
      value={"Profissional"}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Tipo da tratativa" />}
    />
    </div>
        </>
      )
    }
    </>
  );
}

export default InventoryTab;

import Typography from '@mui/material/Typography';

function IntroductionDoc() {
  return (
    <>
      <Typography variant="h4" className="mb-40 font-700">
        Introduction
      </Typography>
      <Typography className="mb-16" component="p">
        This version of Fuse is <i>NOT</i> a traditional admin template, it's a React app written
        entirely with Javascript and has no jQuery dependency.
      </Typography>
      <Typography className="mb-16" component="p">
        While Fuse React is a great tool and source for learning React, it also requires at least an
        entry-level of React, Redux knowledge so you can find your way within the source code.
      </Typography>
      <Typography className="mb-32" component="p">
        Here you can find a list of core libraries, design specifications, and coding standards that
        we use in Fuse React:
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Google's Material Design
      </Typography>
      <Typography className="mb-16" component="p">
        All libraries and custom made components are following{' '}
        <a
          href="https://www.google.com/design/spec/material-design/introduction.html"
          target="_blank"
          rel="noreferrer noopener"
        >
          Google's Material Design Specifications.
        </a>
      </Typography>
      <Typography className="text-20 mt-20 mb-10 font-700" variant="h5">
        Create React App (CLI)
      </Typography>
      <Typography className="mb-16" component="p">
        <a
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          Create React App
        </a>{' '}
        is a tool built by developers at Facebook to help you build React applications. It saves you
        from time-consuming setup and configuration.
      </Typography>
    </>
  );
}

export default IntroductionDoc;

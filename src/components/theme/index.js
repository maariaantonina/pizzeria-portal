import { createMuiTheme } from '@material-ui/core';

import overrides from './overrides';

const theme = createMuiTheme({
  overrides,
  zIndex: {
    appBar: 1200,
    drawer: 1100,
  },
});

export default theme;

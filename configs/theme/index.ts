import { StyleFunctionProps, extendTheme } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools'
import { palettes } from "./palettes";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

export const theme = extendTheme({
  colors: palettes.colors,
  config,
  sizes: {
    container: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1184px',
      xxl: '1366px',
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: '"Open Sans", sans-serif',
        bg: mode(palettes.colors.neutral[0] , palettes.colors.neutral[600])(props),
        color: mode(palettes.colors.neutral[600] , palettes.colors.neutral[0])(props),
        WebkitTapHighlightColor: 'transparent',
      },
    })
  },
  components: {
    Button: {
      baseStyle: {
        borderRadius: '8px',
        fontSize: '0.875rem',
      },
      variants: {
        primary: {
          bg: palettes.colors.primary[500],
          _hover: {
            bg: palettes.colors.primary[600],
          },
          _active: {
            bg: palettes.colors.primary[700],
          }
        },
        connectorButton: {
          bg: palettes.colors.neutral[400],
          _hover: {
            opacity: 0.8,
          },
          rightIcon: {
            ml: 'auto',
          }
        }
      }
    },
    Modal: {
      baseStyle: {
        dialog: {
          bg: palettes.colors.neutral[500],
          borderRadius: '20px',
        }
      },
      
    },
    Menu: {
      baseStyle: {
        list: {
          bg: palettes.colors.neutral[500],
          borderColor: palettes.colors.neutral[400],
          borderRadius: '20px',
        },
        item: {
          bg: 'inherit',
        }
      }
    }
  }
});

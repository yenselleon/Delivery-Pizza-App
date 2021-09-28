import { css } from 'styled-components';


export const formCreditCard = {
    fieldWrapper: {
      base: css`
        margin-bottom: 1rem;
        background: #e94d51;
        width: inherit;
        box-shadow: none;
        border-color: none;

        `
      },
      inputWrapper: {
        base: css`
        background: #e94d51;
        width: inherit;
        box-shadow: none;
        border: 1px solid white;
        `,
        errored: css`
        border: 1px solid yellow;
        box-shadow: none;

        
        `,
        focused: css`
        border: 1px solid white;
        outline: none;
        box-shadow: none;
        `
      },
      input: {
        base: css`
        color: white;
        `,
        errored: css`
          color: yellow;
        `,
        cardNumber: css`
        width: 60%;
        
        &::placeholder {
          color: var(--chakra-colors-whiteAlpha-700);
        }
        `,
        expiryDate: css`
        width: 20%;

        &::placeholder {
          color: var(--chakra-colors-whiteAlpha-700);
        }
        `,
        cvc: css`
        width: 20%;

        &::placeholder {
          color: var(--chakra-colors-whiteAlpha-700);
        }
        
      `
    },
    errorText: {
      base: css`
        color: yellow;
      `
    }
  }


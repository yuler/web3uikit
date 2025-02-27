import styled, { css } from 'styled-components';
import resetCSS from '../../styles/reset';
import font from '../../styles/fonts';
import color from '../../styles/colors';

import { CheckboxProps } from './types';

const inputStyles = css`
    ${resetCSS};
    height: 10px;
    left: -12px;
    position: absolute;
    top: 0;
    width: 10px;
`;

const labelStyles = css`
    ${resetCSS};
    ${font.text};
    color: ${color.blueDark};
    cursor: pointer;
    display: block;
    font-size: 18px;
    margin-bottom: 4px;
    overflow: hidden;
    position: relative;
    width: fit-content;
`;

const labelDisabled = css`
    opacity: 50%;
    pointer-events: none;
`;

const boxStyles = css`
    padding-left: 28px;

    &:before,
    .after {
        border-radius: 5px;
        content: '';
        display: block;
        height: 20px;
        left: 0;
        pointer-events: none;
        position: absolute;
        top: 1px;
        transition: all 0.1s ease-out;
        width: 20px;
    }

    &:before {
        background-color: ${color.blueLight};
        border: 1px solid ${color.blueSky};
        z-index: 0;
    }

    .after {
        align-items: center;
        display: flex;
        justify-content: center;
        left: 1px;
        opacity: 0;
        top: 2px;
        z-index: 1;
    }

    &:hover {
        &:before {
            filter: brightness(95%);
        }
    }

    &:active {
        &:before {
            filter: brightness(90%);
        }
    }
`;

const boxCheckedStyles = css`
    &:before {
        background-color: ${color.green};
        border-color: ${color.greenLight};
    }
    .after {
        opacity: 1;
    }
`;

const switchStyles = css`
    padding-left: 48px;

    &:before {
        background-color: ${color.greyLight};
        border-radius: 7px;
        content: '';
        display: block;
        height: 14px;
        left: 3px;
        opacity: 0.4;
        position: absolute;
        top: calc(50% - 7px);
        transition: all 0.1s ease-out;
        width: 34px;
    }

    &:after {
        background-color: ${color.blueLight};
        border-radius: 50%;
        border: 1px solid ${color.blue};
        content: '';
        display: block;
        height: 20px;
        left: 0;
        position: absolute;
        top: calc(50% - 11px);
        transition: all 0.1s ease-out;
        width: 20px;
    }

    &:hover {
        &:after {
            filter: brightness(95%);
        }
    }

    &:active {
        &:after {
            filter: brightness(90%);
        }
    }
`;

const switchOnStyles = css`
    &:before {
        background-color: ${color.green};
    }

    &:after {
        background-color: ${color.green};
        border: 1px solid ${color.green};
        left: 18px;
    }
`;

const StyledInput = styled.input<Pick<CheckboxProps, 'layout'>>`
    ${inputStyles}
`;

const StyledLabel = styled.label<
    Pick<CheckboxProps, 'layout' | 'checked' | 'disabled'>
>`
    ${labelStyles}
    ${(p) => p.disabled && labelDisabled}
    ${(p) => p.layout === 'box' && boxStyles}
    ${(p) => p.layout === 'box' && p.checked && boxCheckedStyles}
    ${(p) => p.layout === 'switch' && switchStyles}
    ${(p) => p.layout === 'switch' && p.checked && switchOnStyles}
`;

export default { StyledInput, StyledLabel };

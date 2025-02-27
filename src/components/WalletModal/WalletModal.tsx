import Moralis from 'moralis/types';
import React, { FC } from 'react';
import { useMoralis } from 'react-moralis';
import { Button } from '../Button';
import { iconTypes } from '../Icon';
import connectors from './config';
import { WalletModalProps } from './types';
import WalletModalStyles from './WalletModal.styles';

const {
    GridItemStyled,
    GridStyled,
    HeaderStyled,
    ModalStyled,
    TitleStyled,
    WalletCardStyled,
    WalletLogo,
    WalletNameStyled,
    WrapperStyled,
} = WalletModalStyles;

const WalletModal: FC<WalletModalProps> = ({
    chainId,
    isOpened = true,
    moralisAuth,
    setIsOpened,
    signingMessage = 'Moralis Authentication',
    ...props
}) => {
    const { authenticate, isInitialized, enableWeb3 } = useMoralis();

    function connectWallet(provider: Moralis.Web3ProviderType) {
        // to avoid problems in Next.JS apps because of localStorage
        if (typeof window == 'undefined') return;
        if (
            typeof (window as any).ethereum == 'undefined' &&
            provider == 'metamask'
        ) {
            return alert('Please install web3 wallet first');
        }
        const connectProps = {
            provider,
            chainId,
            onSuccess: () => {
                window.localStorage.setItem('provider', provider);
                setIsOpened(false);
            },
        };
        isInitialized && moralisAuth
            ? authenticate({ ...connectProps, signingMessage })
            : enableWeb3(connectProps);
    }

    if (!isOpened) return null;

    return (
        <WrapperStyled data-testid="test-wallet-modal" {...props}>
            <ModalStyled>
                <HeaderStyled data-testid="test-wallet-modal-header">
                    <TitleStyled data-testid="test-wallet-modal-title">
                        Connect Wallet
                    </TitleStyled>
                    <Button
                        icon={iconTypes.x}
                        iconLayout="icon-only"
                        theme="outline"
                        onClick={() => setIsOpened(!isOpened)}
                    />
                </HeaderStyled>
                <GridStyled data-testid="test-wallet-modal-grid">
                    {connectors.map(({ title, icon, provider }, key) => (
                        <GridItemStyled key={key}>
                            <WalletCardStyled
                                data-testid="test-wallet-modal-card"
                                onClick={() =>
                                    connectWallet(
                                        provider as Moralis.Web3ProviderType,
                                    )
                                }
                            >
                                <WalletLogo
                                    data-testid={`test-wallet-modal-logo-${title}`}
                                >
                                    {icon()}
                                </WalletLogo>
                                <WalletNameStyled
                                    data-testid={`test-wallet-modal-title-${title}`}
                                >
                                    {title}
                                </WalletNameStyled>
                            </WalletCardStyled>
                        </GridItemStyled>
                    ))}
                </GridStyled>
            </ModalStyled>
        </WrapperStyled>
    );
};

export default WalletModal;

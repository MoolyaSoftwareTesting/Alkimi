describe('Connect Metamask', () => {
  beforeEach(() => {
    // Visit Alkimi and login using test data
    cy.visitAlkimi();
    cy.fixture('testdata').then((data) => {
      cy.login({ email: data.user.email, password: data.user.password });
    });
  });

  it('should connect and link Metamask wallet', () => {
    cy.contains("Connect Wallet").click();
    cy.contains('MetaMask', { timeout: 20000 }).click();

    // Trigger MetaMask connection, add custom chain, and link account
    cy.window().then((win) => {
      const metamask = win.ethereum;
      // Add custom Ethereum chain
      metamask.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x5', // Goerli Testnet
            chainName: 'Goerli test network',
            rpcUrls: ['https://goerli.infura.io/v3/'],
            nativeCurrency: {
              name: 'Ether',
              symbol: 'GoerliEth',
              decimals: 18,
            },
          },
        ],
      });
      //Inform the user to manually unlock Metamask with the provided password
      cy.log('Please unlock your Metamask account manually using the password: Password@123 and proceed with the test');
      cy.contains('0xd699632DD30b04eD2EF3A256F3c4753776e4fF7a',{timeout:20000}).should('be.visible');
      cy.screenshot('metamask_connection');
    });
  })
});
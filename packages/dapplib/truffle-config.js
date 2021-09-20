require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remain coconut gesture person obscure soldier'; 
let testAccounts = [
"0xc6b9248b4f85cb21974468a7405cd6d386531b68a6446efc06042e64a93b0551",
"0xd37ae9df3dc809b2776933d62a5c53ad4b40a7ac42399fb974f6b60b7d7ffcc5",
"0x57e871037dcc619d06983f7e15ac5eb5f56c5083f16f5af7660240c1d0049fcd",
"0xbcde5e5bd009ba1ce5bf1b7bfade00973a67a8b2d293e08b0a9cd0bb5eebcdf9",
"0x3591c1b569b6abb8ee1ae1c6fb660dfba129461a0a6c0377bc245b0ceb6b1ec0",
"0x9496b07a8c643e146c386cf5d67174c068baf03faa63804748dd921487e5d8a7",
"0x2c74eac595f72a59922b3e9069bbe4433d653f3f3da38f758a529244c15f6c4a",
"0x656c34e7fb6b13a34fd6200bd7571a412ceaa59e74df500a52728eb1b3b27183",
"0x1c3470d77d2329e5ed47ed19f361845a9ff4ea51c1c02244407de515873f10e8",
"0xb7dcba8191ac0bf40d0eb81407f0046507c725b10b40c4d90c7d19d6f12f52a8"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



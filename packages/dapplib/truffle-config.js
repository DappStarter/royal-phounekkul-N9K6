require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success strike crouch saddle punch grace forget tail suggest'; 
let testAccounts = [
"0x53a7c4945ca80693692fca54c9f2fa291910496f68bad80c4a0a4ef6b714d0ef",
"0x85100ac7c8866cba33d55ac04fe9441e01c468f8ba7ecdcb6377039f219e939e",
"0x9bd15d3f3dd9f7cf7d000d856cb04ccd90f55d2469143ba07c80a5d083c1f505",
"0x2f6a83b9dc218926c84d779f38ddba869a38c6788f7b04dd8c227b480b21fb51",
"0x72194646c399d3dcce9bf9ef10296f750a3ae37d3168a21517a37fa87bf66848",
"0x331fdd6a568c55c70746795fb103bc0363da51f796b3337f0df76f845cdc845f",
"0xdde950b57c4fee3d02e8f58da89abd2371d934bd079efc2b35ab74d9cad2d1d2",
"0x570a03abb07b9d422b9613a3498cddfbc847940ce00c2dd6cfe29c18a161a5b4",
"0x3c994f1308f2248b5e299e3289c4149a48648e5981a6e91a7825ad37c5231443",
"0x2bd85362a3e56e816bb716a4653d93be6bbfc84f2dcdf37d8178d2ed34aa8dbc"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


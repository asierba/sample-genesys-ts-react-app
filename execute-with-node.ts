import platformClient from 'purecloud-platform-client-v2';

console.log('Genesys test...');

try {
    console.log('platformClient.ApiClient.instance', platformClient.ApiClient.instance);
} catch (e) {
    console.error('platformClient.ApiClient.instance', e);
}

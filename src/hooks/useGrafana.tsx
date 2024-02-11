import * as WebBrowser from 'expo-web-browser'


export default function useGrafana(){
    function handleOpenBrowser(){
        WebBrowser.openBrowserAsync('https://grafana-pub.pop-sc.rnp.br/d/WJMf7D_4k/rct-enlaces-dev?orgId=4')
    }

    
    return {
        handleOpenBrowser
    }
}
//Mobile Check
var m_url="https://msf.or.kr/campaigns/COVID-19/m/m_index.html";
getOSInfo(m_url);

//Mobile Check
function getOSInfo(url) {
	var devName = OSInfoDev();
	if(devName.indexOf("iPhone") != -1) {
		console.log('iPhone');
		location.href=url+window.location.search;
	}
	else if(devName.indexOf("Android") != -1) {
		console.log('Android!!');
		location.href=url+window.location.search;
	}
	else{
		//console.log( devName );
	}
}
var relays = 'PROXY 10.10.1.100:9000';
var direct = 'DIRECT';

var hosts = [
    'google.com',
    'instagram.com',
];

function FindProxyForURL(url, host) {
    for (var i = 0; i < hosts.length; i += 1) {
        var r = ['(*.', hosts[i], '|', hosts[i], ')'].join('');
        if (dnsDomainIs(host, hosts[i]) || shExpMatch(host, r)) {
            return relays;
        }
    }
    return direct;
}

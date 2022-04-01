interface SiteItemType {
  sitename: string, siteurl: string
}
interface SiteListType extends Array<SiteItemType> { }

const sitelist: SiteListType = [
  { sitename: 'a1mechanical', siteurl: 'https://a1mechanical.com' },
  { sitename: 'a+/swift', siteurl: 'https://www.followthesnowman.com/' },
  { sitename: 'atomatic', siteurl: 'https://atomatic.com/' },
  { sitename: 'belo', siteurl: 'https://www.belocooling.com/' },
  { sitename: 'chesterfield', siteurl: 'https://www.chesterfieldservice.com/' },
  { sitename: 'docdancer', siteurl: 'https://www.docdancer.com' },
  { sitename: 'edelman', siteurl: 'https://www.edelmaninc.com/' },
  { sitename: 'edwards', siteurl: 'https://edwardsroyalcomfort.com/' },
  { sitename: 'efficientsystems', siteurl: 'https://www.efficientsystems.net/' },
  { sitename: 'energysavers', siteurl: 'https://www.energysaversair.com/' },
  { sitename: 'evergreen', siteurl: 'https://evergreencomfort.com' },
  { sitename: 'gibson', siteurl: 'https://gibsonheating-cooling.com/' },
  { sitename: 'grove', siteurl: 'https://grovehvac.com/' },
  { sitename: 'hans', siteurl: 'https://834hans.com/' },
  { sitename: 'heartland', siteurl: 'https://heartlandheatingandair.com/' },
  { sitename: 'keller', siteurl: 'https://www.kellerschroeder.com/' },
  { sitename: 'kenney', siteurl: 'https://kenneymachinery.com/' },
  { sitename: 'ksservices', siteurl: 'https://www.callks.com/' },
  { sitename: 'mission', siteurl: 'https://missionmechanical.com/' },
  { sitename: 'novak', siteurl: 'http://novakheating.com/' },
  { sitename: 'poston', siteurl: 'https://postonbrothers.com/' },
  { sitename: 'ravinia', siteurl: 'http://raviniaplumbing.com/' },
  { sitename: 'rescon', siteurl: 'https://www.resconsolutions.com/' },
  { sitename: 'redman', siteurl: 'https://redmanph.com/' },
  { sitename: 'revamped', siteurl: 'https://revampedsecurity.com/' },
  { sitename: 'rusk', siteurl: 'https://www.docrusk.com/' },
  { sitename: 'rpm', siteurl: 'https://rpmmachinery.com/' },
  { sitename: 'sanborns', siteurl: 'https://sanbornsac.com/' },
  { sitename: 'schebler', siteurl: 'https://www.scheblerhvac.com/' },
  { sitename: 'star', siteurl: 'https://starheatcool.com/' },
  { sitename: 'thiele', siteurl: 'https://callthiele.com/' },
  { sitename: 'valveandmeter', siteurl: 'https://valveandmeter.com/' },
  { sitename: 'vanausdall', siteurl: 'https://www.vanausdall.com' }
]
export default sitelist;
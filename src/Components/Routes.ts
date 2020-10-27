export interface RoutePath {
  name: string;
  path: string;
  tab?: boolean;
}

export const routePaths: RoutePath[] = [
{ name: 'Home', path: '/', tab: true },
{ name: 'Services', path: '/services', tab: true },
{ name: 'Custom Software', path: '/services/customsoftware' },
{ name: 'Mobile Apps', path: '/services/mobileapps' },
{ name: 'Websites', path: '/services/websites' },
{ name: 'The Revolution', path: '/revolution', tab: true },
{ name: 'About Us', path: '/about', tab: true },
{ name: 'Contact Us', path: '/contact', tab: true },
{ name: 'Estimate', path: '/estimate' },
]

export default routePaths;
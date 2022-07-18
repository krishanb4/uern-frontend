import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'USEON',
  description:
    'The most popular AMM on BSC by user count! Earn UERN through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by USEON), NFTs, and more, on a platform you can trust.',
  image: 'https://mcdao.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  switch (path) {
    case '/':
      return {
        title: `${t('Home')} | ${t('USEON')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('USEON')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('USEON')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('USEON')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('USEON')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('USEON')}`,
      }
    case '/collectibles':
      return {
        title: `${t('Collectibles')} | ${t('USEON')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('USEON')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('USEON')}`,
      }
    case '/profile/tasks':
      return {
        title: `${t('Task Center')} | ${t('USEON')}`,
      }
    case '/profile':
      return {
        title: `${t('Your Profile')} | ${t('USEON')}`,
      }
    default:
      return null
  }
}

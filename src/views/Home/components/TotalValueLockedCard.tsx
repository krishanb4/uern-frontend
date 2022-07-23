import React, { useState } from 'react'
import styled from 'styled-components'
import { Card, CardBody, Heading, Skeleton, Text } from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useGetStats } from 'hooks/api'
import { usePriceCakeBusd } from 'state/hooks'
import { totalStakedFortvl } from '../../../state/pools/index'
import { FarmsStaked } from '../../Farms/Farms'

const StyledTotalValueLockedCard = styled(Card)`
  align-items: center;
  display: flex;
  flex: 1;
`

const TotalValueLockedCard = () => {
  const { t } = useTranslation()
  const data = useGetStats()

  const [poolsusern, setPoolsuerm] = useState(0)

  async function fetchTotalStaked() {
    const tvlpools = await totalStakedFortvl();
    setPoolsuerm(Number(tvlpools[0].totalStaked) / 10 ** 18)


  }

  const lppool1 = Number(FarmsStaked()[0].liquidity.liquidity);
  const lppool2 = Number(FarmsStaked()[1].liquidity.liquidity);

  const lptotal = lppool1 + lppool2;


  const uernPrice = usePriceCakeBusd();

  fetchTotalStaked();


  const tvl = (poolsusern * Number(uernPrice) + lptotal).toFixed(3);

  return (
    <StyledTotalValueLockedCard>
      <CardBody>
        <Heading scale="xl" mb="24px">
          {t('Total Value Locked (TVL)')}
        </Heading>
        {data ? (
          <>
            <Heading scale="xl">{`$${tvl}`}</Heading>
            <Text color="textSubtle">{t('Across all LPs and Staking Pools')}</Text>
          </>
        ) : (
          <Skeleton height={66} />
        )}
      </CardBody>
    </StyledTotalValueLockedCard>
  )
}

export default TotalValueLockedCard

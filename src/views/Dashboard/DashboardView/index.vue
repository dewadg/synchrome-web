<template>
  <PageWrapper>
    <VLayout
      row
      wrap
    >
      <VFlex
        lg3
        xs12
        pr-2
      >
        <VCard
          color="green"
          dark
          class="mb-4"
        >
          <VCardTitle>
            <span class="headline">
              ASN
            </span>
          </VCardTitle>
          <VCardText>
            125.000 orang
          </VCardText>
        </VCard>
      </VFlex>
      <VFlex
        lg3
        xs12
        pl-2
        pr-2
      >
        <VCard
          color="purple"
          dark
          class="mb-4"
        >
          <VCardTitle>
            <span class="headline">
              OPD
            </span>
          </VCardTitle>
          <VCardText>
            50 OPD
          </VCardText>
        </VCard>
      </VFlex>
      <VFlex
        lg3
        xs12
        pl-2
        pr-2
      >
        <VCard
          color="orange darken-1"
          dark
          class="mb-4"
        >
          <VCardTitle>
            <span class="headline">
              Keterlambatan
            </span>
          </VCardTitle>
          <VCardText>
            25% / November
          </VCardText>
        </VCard>
      </VFlex>
      <VFlex
        lg3
        xs12
        pl-2
      >
        <VCard
          color="light-blue darken-1"
          dark
          class="mb-4"
        >
          <VCardTitle>
            <span class="headline">
              Denda Tertinggi
            </span>
          </VCardTitle>
          <VCardText>
            Rp 560.000 - Michael Alan, S.T.
          </VCardText>
        </VCard>
      </VFlex>
      <VFlex
        lg6
        md12
        pr-2
      >
        <AttendanceStats class="mb-3" />
      </VFlex>
      <VFlex
        lg6
        md12
        pl-2
      >
        <TppStats class="mb-3" />
      </VFlex>
      <VFlex
        xs12
      >
        <SyncActivityStats class="mb-3" />
      </VFlex>
    </VLayout>
  </PageWrapper>
</template>

<script>
import AttendanceStats from '@/components/AttendanceStats'
import TppStats from '@/components/TppStats'
import SyncActivityStats from '@/components/SyncActivityStats'

export default {
  components: {
    AttendanceStats,
    TppStats,
    SyncActivityStats
  }
}
</script>

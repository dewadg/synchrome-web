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
            {{ asn.length }} <small>orang</small>
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
            {{ agencies.length }} <small>OPD</small>
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
            25% <small>/ November</small>
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
            Rp 560.000 - <small>Michael Alan, S.T.</small>
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
import { mapGetters, mapActions } from 'vuex'
import AttendanceStats from '@/components/AttendanceStats'
import TppStats from '@/components/TppStats'
import SyncActivityStats from '@/components/SyncActivityStats'
import { FETCH_ALL_ASN, GET_ASN_DATA } from '@/stores/types/asnTypes'
import { FETCH_ALL_AGENCIES, GET_AGENCY_DATA } from '@/stores/types/agencyTypes'

export default {
  name: 'Dashboard',

  components: {
    AttendanceStats,
    TppStats,
    SyncActivityStats
  },

  computed: {
    ...mapGetters({
      asn: GET_ASN_DATA,
      agencies: GET_AGENCY_DATA
    })
  },

  async mounted () {
    const fetchAsn = this.fetchAsn()
    const fetchAgencies = this.fetchAgencies()

    await fetchAsn
    await fetchAgencies
  },

  methods: {
    ...mapActions({
      fetchAsn: FETCH_ALL_ASN,
      fetchAgencies: FETCH_ALL_AGENCIES
    })
  }
}
</script>

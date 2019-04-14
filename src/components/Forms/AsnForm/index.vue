<template>
  <form @submit.prevent="submitHandler">
    <div class="tw-flex">
      <div class="tw-w-1/4 tw-pr-2">
        <VTextField
          label="NIP"
          v-model="asnId"
          :error-messages="asnIdErrors"
          @input="$v.asnId.$touch"
        />
      </div>
      <div class="tw-flex-1 tw-pl-2">
        <VTextField
          label="Nama"
          v-model="asnName"
          :error-messages="asnNameErrors"
          @input="$v.asnName.$touch"
        />
      </div>
    </div>
    <VTextField
      label="No. Telp"
      v-model="asnPhone"
    />
    <VTextarea
      label="Alamat"
      v-model="asnAddress"
      class="tw-mb-6"
    />
    <h3 class="tw-text-lg tw-mb-2">OPD dan Jabatan</h3>
    <AgencyControl>
      <template #default="{ loading, items }">
        <VProgressLinear
          v-if="loading"
          :indeterminate="true"
        />
        <VAutocomplete
          v-else
          label="OPD"
          v-model="asnAgencyId"
          :items="items"
          item-value="id"
          item-text="name"
          :error-messages="asnAgencyIdErrors"
          @change="$v.asnAgencyId.$touch"
        />
      </template>
    </AgencyControl>
    <div class="tw-flex">
      <div class="tw-flex-1 tw-pr-2">
        <EchelonControl>
          <template #default="{ loading, items }">
            <VProgressLinear
              v-if="loading"
              :indeterminate="true"
            />
            <VAutocomplete
              label="Jabatan"
              v-model="asnEchelonId"
              :items="items"
              item-value="id"
              item-text="name"
              :error-messages="asnEchelonIdErrors"
              @change="$v.asnEchelonId.$touch"
            />
          </template>
        </EchelonControl>
      </div>
      <div class="tw-flex-1 tw-pl-2">
        <RankControl>
          <template #default="{ loading, items }">
            <VProgressLinear
              v-if="loading"
              :indeterminate="true"
            />
            <VAutocomplete
              label="Golongan"
              v-model="asnRankId"
              :items="items"
              item-value="id"
              item-text="name"
              :error-messages="asnRankIdErrors"
              @change="$v.asnRankId.$touch"
            />
          </template>
        </RankControl>
      </div>
    </div>
    <TppControl>
      <template #default="{ loading, items }">
        <VProgressLinear
          v-if="loading"
          :indeterminate="true"
        />
        <VAutocomplete
          label="Jenis TPP"
          v-model="asnTppId"
          :items="items"
          item-value="id"
          item-text="name"
          class="tw-mb-6"
          :error-messages="asnTppIdErrors"
          @change="$v.asnTppId.$touch"
        />
      </template>
    </TppControl>
    <h3 class="tw-text-lg tw-mb-2">Jadwal/Presensi</h3>
    <div class="tw-flex">
      <div class="tw-flex-1 tw-pr-2">
        <CalendarControl>
          <template #default="{ loading, items }">
            <VProgressLinear
              v-if="loading"
              :indeterminate="true"
            />
            <VAutocomplete
              label="Kalender Kerja"
              v-model="asnCalendarId"
              :items="items"
              item-value="id"
              item-text="name"
              :error-messages="asnCalendarIdErrors"
              @change="$v.asnCalendarId.$touch"
            />
          </template>
        </CalendarControl>
      </div>
      <div class="tw-flex-1 tw-pl-2">
        <WorkshiftControl>
          <template #default="{ loading, items }">
            <VProgressLinear
              v-if="loading"
              :indeterminate="true"
            />
            <VAutocomplete
              label="Shift Kerja"
              v-model="asnWorkshiftId"
              :items="items"
              item-value="id"
              item-text="name"
              :error-messages="asnWorkshiftIdErrors"
              @change="$v.asnWorkshiftId.$touch"
            />
          </template>
        </WorkshiftControl>
      </div>
    </div>
    <VTextField
      label="PIN Mesin Sidik Jari"
      v-model="asnPin"
    />
  </form>
</template>

<script>
import validator from './validator'
import { GET_ASN_FORM, SET_ASN_FORM } from '@/stores/types/asnTypes'
import AgencyControl from '@/components/Renderless/AgencyControl'
import EchelonControl from '@/components/Renderless/EchelonControl'
import RankControl from '@/components/Renderless/RankControl'
import TppControl from '@/components/Renderless/TppControl'
import CalendarControl from '@/components/Renderless/CalendarControl'
import WorkshiftControl from '@/components/Renderless/WorkshiftControl'

export default {
  name: 'AsnForm',

  components: {
    AgencyControl,
    EchelonControl,
    RankControl,
    TppControl,
    CalendarControl,
    WorkshiftControl
  },

  props: {
    value: {
      type: Boolean,
      required: true
    },
    editMode: {
      type: Boolean,
      default: false
    }
  },

  computed: {
    form () {
      return this.$store.getters[GET_ASN_FORM]
    },

    asnId: {
      get () {
        return this.form.id
      },
      set (id) {
        this.$store.commit(SET_ASN_FORM, { id })
      }
    },

    asnName: {
      get () {
        return this.form.name
      },
      set (name) {
        this.$store.commit(SET_ASN_FORM, { name })
      }
    },

    asnPhone: {
      get () {
        return this.form.phone
      },
      set (phone) {
        this.$store.commit(SET_ASN_FORM, { phone })
      }
    },

    asnAddress: {
      get () {
        return this.form.address
      },
      set (address) {
        this.$store.commit(SET_ASN_FORM, { address })
      }
    },

    asnAgencyId: {
      get () {
        return this.form.agencyId
      },
      set (agencyId) {
        this.$store.commit(SET_ASN_FORM, { agencyId })
      }
    },

    asnEchelonId: {
      get () {
        return this.form.echelonId
      },
      set (echelonId) {
        this.$store.commit(SET_ASN_FORM, { echelonId })
      }
    },

    asnRankId: {
      get () {
        return this.form.rankId
      },
      set (rankId) {
        this.$store.commit(SET_ASN_FORM, { rankId })
      }
    },

    asnTppId: {
      get () {
        return this.form.tppId
      },
      set (tppId) {
        this.$store.commit(SET_ASN_FORM, { tppId })
      }
    },

    asnCalendarId: {
      get () {
        return this.form.calendarId
      },
      set (calendarId) {
        this.$store.commit(SET_ASN_FORM, { calendarId })
      }
    },

    asnWorkshiftId: {
      get () {
        return this.form.workshiftId
      },
      set (workshiftId) {
        this.$store.commit(SET_ASN_FORM, { workshiftId })
      }
    },

    asnPin: {
      get () {
        return this.form.pin
      },
      set (pin) {
        this.$store.commit(SET_ASN_FORM, { pin })
      }
    },

    asnIdErrors () {
      const err = []

      if (!this.$v.asnId.$invalid) return err

      if (this.$v.asnId.$dirty && !this.$v.asnId.required) {
        err.push('NIP harus diisi')
      }

      return err
    },

    asnNameErrors () {
      const err = []

      if (!this.$v.asnName.$invalid) return err

      if (this.$v.asnName.$dirty && !this.$v.asnName.required) {
        err.push('Nama ASN harus diisi')
      }

      return err
    },

    asnAgencyIdErrors () {
      const err = []

      if (!this.$v.asnAgencyId.$invalid) return err

      if (this.$v.asnAgencyId.$dirty && !this.$v.asnAgencyId.required) {
        err.push('OPD harus diisi')
      }

      return err
    },

    asnEchelonIdErrors () {
      const err = []

      if (!this.$v.asnEchelonId.$invalid) return err

      if (this.$v.asnEchelonId.$dirty && !this.$v.asnEchelonId.required) {
        err.push('Jabatan harus diisi')
      }

      return err
    },

    asnRankIdErrors () {
      const err = []

      if (!this.$v.asnRankId.$invalid) return err

      if (this.$v.asnRankId.$dirty && !this.$v.asnRankId.required) {
        err.push('Golongan harus diisi')
      }

      return err
    },

    asnTppIdErrors () {
      const err = []

      if (!this.$v.asnTppId.$invalid) return err

      if (this.$v.asnTppId.$dirty && !this.$v.asnTppId.required) {
        err.push('Jenis TPP harus diisi')
      }

      return err
    },

    asnCalendarIdErrors () {
      const err = []

      if (!this.$v.asnCalendarId.$invalid) return err

      if (this.$v.asnCalendarId.$dirty && !this.$v.asnCalendarId.required) {
        err.push('Kalender kerja harus diisi')
      }

      return err
    },

    asnWorkshiftIdErrors () {
      const err = []

      if (!this.$v.asnWorkshiftId.$invalid) return err

      if (this.$v.asnWorkshiftId.$dirty && !this.$v.asnWorkshiftId.required) {
        err.push('Shift kerja harus diisi')
      }

      return err
    }
  },

  validations: validator,

  watch: {
    form: {
      deep: true,
      handler () {
        this.emitInput()
      }
    }
  },

  methods: {
    emitInput () {
      this.$emit('input', !this.$v.$invalid)
    },

    submitHandler () {
      this.$emit('submit')
    }
  }
}
</script>

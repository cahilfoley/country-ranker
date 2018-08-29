import criteria from './criteria'

const getRandomScore = () => Math.floor(Math.random() * 1000) / 10

export default [
  {
    name: 'Afghanistan',
    code: 'AF'
  },
  {
    name: 'Albania',
    code: 'AL'
  },
  {
    name: 'Antigua and Barbuda',
    code: 'AG'
  },
  {
    name: 'Argentina',
    code: 'AR'
  },
  {
    name: 'Australia',
    code: 'AU'
  },
  {
    name: 'Austria',
    code: 'AT'
  },
  {
    name: 'Bahamas',
    code: 'BS'
  },
  {
    name: 'Bangladesh',
    code: 'BD'
  },
  {
    name: 'Barbados',
    code: 'BB'
  },
  {
    name: 'Belarus',
    code: 'BY'
  },
  {
    name: 'Belgium',
    code: 'BE'
  },
  {
    name: 'Belize',
    code: 'BZ'
  },
  {
    name: 'Bolivia',
    code: 'BO'
  },
  {
    name: 'Bosnia and Herzegovina',
    code: 'BA'
  },
  {
    name: 'Botswana',
    code: 'BW'
  },
  {
    name: 'Brazil',
    code: 'BR'
  },
  {
    name: 'Bulgaria',
    code: 'BG'
  },
  {
    name: 'Burkina Faso',
    code: 'BF'
  },
  {
    name: 'Cambodia',
    code: 'KH'
  },
  {
    name: 'Cameroon',
    code: 'CM'
  },
  {
    name: 'Canada',
    code: 'CA'
  },
  {
    name: 'Chile',
    code: 'CL'
  },
  {
    name: 'China',
    code: 'CN'
  },
  {
    name: 'Colombia',
    code: 'CO'
  },
  {
    name: 'Costa Rica',
    code: 'CR'
  },
  {
    name: "Cote d'Ivoire",
    code: 'CI'
  },
  {
    name: 'Croatia',
    code: 'HR'
  },
  {
    name: 'Czech Republic',
    code: 'CZ'
  },
  {
    name: 'Denmark',
    code: 'DK'
  },
  {
    name: 'Dominica',
    code: 'DM'
  },
  {
    name: 'Dominican Republic',
    code: 'DO'
  },
  {
    name: 'Ecuador',
    code: 'EC'
  },
  {
    name: 'Egypt',
    code: 'EG'
  },
  {
    name: 'El Salvador',
    code: 'SV'
  },
  {
    name: 'Estonia',
    code: 'EE'
  },
  {
    name: 'Ethiopia',
    code: 'ET'
  },
  {
    name: 'Finland',
    code: 'FI'
  },
  {
    name: 'France',
    code: 'FR'
  },
  {
    name: 'Georgia',
    code: 'GE'
  },
  {
    name: 'Germany',
    code: 'DE'
  },
  {
    name: 'Ghana',
    code: 'GH'
  },
  {
    name: 'Greece',
    code: 'GR'
  },
  {
    name: 'Grenada',
    code: 'GD'
  },
  {
    name: 'Guatemala',
    code: 'GT'
  },
  {
    name: 'Guyana',
    code: 'GY'
  },
  {
    name: 'Honduras',
    code: 'HN'
  },
  {
    name: 'Hong Kong',
    code: 'HK'
  },
  {
    name: 'Hungary',
    code: 'HU'
  },
  {
    name: 'India',
    code: 'IN'
  },
  {
    name: 'Indonesia',
    code: 'ID'
  },
  {
    name: 'Iran',
    code: 'IR'
  },
  {
    name: 'Italy',
    code: 'IT'
  },
  {
    name: 'Jamaica',
    code: 'JM'
  },
  {
    name: 'Japan',
    code: 'JP'
  },
  {
    name: 'Jordan',
    code: 'JO'
  },
  {
    name: 'Kazakhstan',
    code: 'KZ'
  },
  {
    name: 'Kenya',
    code: 'KE'
  },
  {
    name: 'Kyrgyzstan',
    code: 'KG'
  },
  {
    name: 'Lebanon',
    code: 'LB'
  },
  {
    name: 'Liberia',
    code: 'LR'
  },
  {
    name: 'Macedonia',
    code: 'MK'
  },
  {
    name: 'Madagascar',
    code: 'MG'
  },
  {
    name: 'Malawi',
    code: 'MW'
  },
  {
    name: 'Malaysia',
    code: 'MY'
  },
  {
    name: 'Mexico',
    code: 'MX'
  },
  {
    name: 'Moldova',
    code: 'MD'
  },
  {
    name: 'Mongolia',
    code: 'MN'
  },
  {
    name: 'Morocco',
    code: 'MA'
  },
  {
    name: 'Myanmar',
    code: 'MM'
  },
  {
    name: 'Nepal',
    code: 'NP'
  },
  {
    name: 'Netherlands',
    code: 'NL'
  },
  {
    name: 'New Zealand',
    code: 'NZ'
  },
  {
    name: 'Nicaragua',
    code: 'NI'
  },
  {
    name: 'Nigeria',
    code: 'NG'
  },
  {
    name: 'Norway',
    code: 'NO'
  },
  {
    name: 'Pakistan',
    code: 'PK'
  },
  {
    name: 'Panama',
    code: 'PA'
  },
  {
    name: 'Peru',
    code: 'PE'
  },
  {
    name: 'Philippines',
    code: 'PH'
  },
  {
    name: 'Poland',
    code: 'PL'
  },
  {
    name: 'Portugal',
    code: 'PT'
  },
  {
    name: 'South Korea',
    code: 'KR'
  },
  {
    name: 'Romania',
    code: 'RO'
  },
  {
    name: 'Russia',
    code: 'RU'
  },
  {
    name: 'Senegal',
    code: 'SN'
  },
  {
    name: 'Serbia',
    code: 'RS'
  },
  {
    name: 'Sierra Leone',
    code: 'SL'
  },
  {
    name: 'Singapore',
    code: 'SG'
  },
  {
    name: 'Slovenia',
    code: 'SI'
  },
  {
    name: 'South Africa',
    code: 'ZA'
  },
  {
    name: 'Spain',
    code: 'ES'
  },
  {
    name: 'Sri Lanka',
    code: 'LK'
  },
  {
    name: 'St.Kitts and Nevis',
    code: 'KN'
  },
  {
    name: 'St.Lucia',
    code: 'LC'
  },
  {
    name: 'St.Vincent and the Grenadines',
    code: 'VC'
  },
  {
    name: 'Suriname',
    code: 'SR'
  },
  {
    name: 'Sweden',
    code: 'SE'
  },
  {
    name: 'Tanzania',
    code: 'TZ'
  },
  {
    name: 'Thailand',
    code: 'TH'
  },
  {
    name: 'Trinidad and Tobago',
    code: 'TT'
  },
  {
    name: 'Tunisia',
    code: 'TN'
  },
  {
    name: 'Turkey',
    code: 'TR'
  },
  {
    name: 'Uganda',
    code: 'UG'
  },
  {
    name: 'Ukraine',
    code: 'UA'
  },
  {
    name: 'United Arab Emirates',
    code: 'AE'
  },
  {
    name: 'United Kingdom',
    code: 'GB'
  },
  {
    name: 'United States',
    code: 'US'
  },
  {
    name: 'Uruguay',
    code: 'UY'
  },
  {
    name: 'Uzbekistan',
    code: 'UZ'
  },
  {
    name: 'Venezuela',
    code: 'VE'
  },
  {
    name: 'Vietnam',
    code: 'VN'
  },
  {
    name: 'Zambia',
    code: 'ZM'
  },
  {
    name: 'Zimbabwe',
    code: 'ZW'
  }
].map(country => {
  let overallTotal = 0
  let overallCount = 0
  criteria.forEach(item => {
    if (item.components) {
      const output = { label: item.label }
      let total = 0

      output.components = item.components.map(component => {
        const value = getRandomScore()
        total += value
        overallCount++
        return { label: component, value }
      })

      overallTotal += total
      output.value = Math.floor((total / item.components.length) * 10) / 10

      country[item.label] = output
    }
  })

  country['Overall Result'] = {
    value: Math.floor((overallTotal / overallCount) * 10) / 10
  }
  return country
})

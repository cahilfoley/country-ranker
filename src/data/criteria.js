import Bank from 'mdi-material-ui/Bank'
import BookmarkCheck from 'mdi-material-ui/BookmarkCheck'
import ChartDonutVariant from 'mdi-material-ui/ChartDonutVariant'
import Incognito from 'mdi-material-ui/Incognito'
import SecurityAccountOutline from 'mdi-material-ui/SecurityAccountOutline'
import Gavel from 'mdi-material-ui/Gavel'

export default [
  { label: 'Overall Result', icon: ChartDonutVariant },
  {
    label: 'Government Accountability',
    icon: Bank,
    components: [
      'Government powers are effectively limited by the legislature',
      'Government powers are effectively limited by the judiciary',
      'Government powers are effectively limited by independent auditing and review',
      'Government officials are sanctioned for misconduct',
      'Government powers are subject to non-governmental checks',
      'Transition of power is subject to the law',
      'Publicized laws and government data',
      'Right to information',
      'Civic participation',
      'Complaint mechanisms'
    ]
  },
  {
    label: 'Absence of Corruption',
    icon: Incognito,
    components: [
      'Government officials in the executive branch do not use public office for private gain',
      'Government officials in the judicial branch do not use public office for private gain',
      'Government officials in the police and the military do not use public office for private gain',
      'Government officials in the legislative branch do not use public office for private gain'
    ]
  },
  {
    label: 'Fundamental Rights',
    icon: BookmarkCheck,
    components: [
      'Equal treatment and absence of discrimination',
      'The right to life and security of the person is effectively guaranteed',
      'Due process of law and rights of the accused',
      'Freedom of opinion and expression is effectively guaranteed',
      'Freedom of belief and religion is effectively guaranteed',
      'Freedom from arbitrary interference with privacy is effectively guaranteed',
      'Freedom of assembly and association is effectively guaranteed',
      'Fundamental labour rights are effectively guaranteed'
    ]
  },
  {
    label: 'Public Order and Security',
    icon: SecurityAccountOutline,
    components: [
      'Crime is effectively controlled',
      'Civil conflict is effectively limited',
      'People do not resort to violence to redress personal grievances'
    ]
  },
  {
    label: 'Civil & Criminal Justice',
    icon: Gavel,
    components: [
      'People can access and afford civil justice',
      'Civil justice is free of discrimination',
      'Civil justice is free of corruption',
      'Civil justice is free of improper government influence',
      'Civil justice is not subject to unreasonable delay',
      'Civil justice is effectively enforced',
      'Alternative dispute resolution mechanisms are accessible, impartial, and effective',
      'Criminal investigation system is effective',
      'Criminal adjudication system is timely and effective',
      'Correctional system is effective in reducing criminal behavior',
      'Criminal system is impartial',
      'Criminal system is free of corruption',
      'Criminal system is free of improper government influence',
      'Due process of law and the rights of the accused '
    ]
  }
]

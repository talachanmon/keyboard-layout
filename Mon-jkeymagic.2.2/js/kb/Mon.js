var keyboard ={
'name':'Mon',
'autobksp':true,
'trackcaps':false,
'eat':true,
'hotkey': 'Ctrl + Shift + M',
'rules': [
{
'length':1,
'lhs':[
{'type':tSwitch, 'switchId':2},
{'type':tAny}
],
'rhs':[
{'type':tReference, 'index':0}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbf},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u105c'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x58},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1006'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbe},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u102b'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x56},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1018'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbc},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1038'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xde},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u104b'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4d},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u105f'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x43},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u105a'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4e},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u105e'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x5a},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1007'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x39},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u0028'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x31},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u100b'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x32},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1003'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x33},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u100c'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x34},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u100f'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x35},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u105b'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x36},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1029'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x59},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1032'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x37},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u105d'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x38},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1034'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x30},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u0029'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbd},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1027'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbb},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1023'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x51},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1009'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x57},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u103d'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x45},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1035'},
{'type':tString, 'value':'\u102f'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x52},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u100a'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x54},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1010'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x20},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u0020'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x55},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1030'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x49},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1033'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4f},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1001'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x50},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1015'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xc0},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u103f'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xdb},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u103b'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xdc},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u100e'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xdd},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1013'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x41},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1021'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x53},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1005'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x44},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1012'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x46},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x47},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1002'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x48},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u103e'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4a},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u102e'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4b},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1000'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4c},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1060'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xba},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u100d'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x6e},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u002e'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x42},
{'type':tVKey, 'keyCode':0x10}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1017'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbd}
],
'rhs':[
{'type':tString, 'value':'\u1028'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x30}
],
'rhs':[
{'type':tString, 'value':'\u1040'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x39}
],
'rhs':[
{'type':tString, 'value':'\u1049'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x38}
],
'rhs':[
{'type':tString, 'value':'\u1048'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x37}
],
'rhs':[
{'type':tString, 'value':'\u1047'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x36}
],
'rhs':[
{'type':tString, 'value':'\u1046'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x35}
],
'rhs':[
{'type':tString, 'value':'\u1045'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x34}
],
'rhs':[
{'type':tString, 'value':'\u1044'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x33}
],
'rhs':[
{'type':tString, 'value':'\u1043'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x32}
],
'rhs':[
{'type':tString, 'value':'\u1042'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x31}
],
'rhs':[
{'type':tString, 'value':'\u1041'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x6e}
],
'rhs':[
{'type':tString, 'value':'\u002e'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbf}
],
'rhs':[
{'type':tString, 'value':'\u105c'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbe}
],
'rhs':[
{'type':tString, 'value':'\u102c'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbc}
],
'rhs':[
{'type':tString, 'value':'\u1036'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4d}
],
'rhs':[
{'type':tString, 'value':'\u1019'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4e}
],
'rhs':[
{'type':tString, 'value':'\u1014'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x42}
],
'rhs':[
{'type':tString, 'value':'\u1017'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x56}
],
'rhs':[
{'type':tString, 'value':'\u1018'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x43}
],
'rhs':[
{'type':tString, 'value':'\u105a'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x58}
],
'rhs':[
{'type':tString, 'value':'\u1006'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x5a}
],
'rhs':[
{'type':tString, 'value':'\u1007'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xde}
],
'rhs':[
{'type':tString, 'value':'\u104a'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xba}
],
'rhs':[
{'type':tString, 'value':'\u100d'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4c}
],
'rhs':[
{'type':tString, 'value':'\u101c'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4b}
],
'rhs':[
{'type':tString, 'value':'\u1000'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4a}
],
'rhs':[
{'type':tString, 'value':'\u103a'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x48}
],
'rhs':[
{'type':tString, 'value':'\u101f'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x47}
],
'rhs':[
{'type':tString, 'value':'\u1002'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x46}
],
'rhs':[
{'type':tString, 'value':'\u1016'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x44}
],
'rhs':[
{'type':tString, 'value':'\u1012'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x53}
],
'rhs':[
{'type':tString, 'value':'\u1005'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x41}
],
'rhs':[
{'type':tString, 'value':'\u1021'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xdd}
],
'rhs':[
{'type':tString, 'value':'\u1013'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xdc}
],
'rhs':[
{'type':tString, 'value':'\u1011'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xdb}
],
'rhs':[
{'type':tString, 'value':'\u103c'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xc0}
],
'rhs':[
{'type':tString, 'value':'\u1020'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x50}
],
'rhs':[
{'type':tString, 'value':'\u1015'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x4f}
],
'rhs':[
{'type':tString, 'value':'\u1001'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x49}
],
'rhs':[
{'type':tString, 'value':'\u102d'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x55}
],
'rhs':[
{'type':tString, 'value':'\u102f'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x59}
],
'rhs':[
{'type':tString, 'value':'\u101a'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x54}
],
'rhs':[
{'type':tString, 'value':'\u1010'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x52}
],
'rhs':[
{'type':tString, 'value':'\u101b'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x45}
],
'rhs':[
{'type':tString, 'value':'\u200b'},
{'type':tString, 'value':'\u1031'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x57}
],
'rhs':[
{'type':tString, 'value':'\u101d'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0x51}
],
'rhs':[
{'type':tString, 'value':'\u101e'}
]
},
{
'length':0,
'lhs':[
{'type':tVKey, 'keyCode':0xbb}
],
'rhs':[
{'type':tString, 'value':'\u1025'}
]
},
{
'length':7,
'lhs':[
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u1039'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u102f'},
{'type':tString, 'value':'\u1004\u103a\u1039'}
],
'rhs':[
{'type':tString, 'value':'\u1004\u103a\u1039'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1},
{'type':tReference, 'index':2},
{'type':tReference, 'index':3}
]
},
{
'length':6,
'lhs':[
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u103b'},
{'type':tString, 'value':'\u1031'},
{'type':tString, 'value':'\u1004\u103a\u1039'}
],
'rhs':[
{'type':tString, 'value':'\u1004\u103a\u1039'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1},
{'type':tReference, 'index':2}
]
},
{
'length':6,
'lhs':[
{'type':tString, 'value':'\u1000'},
{'type':tString, 'value':'\u1031'},
{'type':tString, 'value':'\u102c'},
{'type':tString, 'value':'\u1036'},
{'type':tString, 'value':'\u1000'},
{'type':tString, 'value':'\u102f'}
],
'rhs':[
{'type':tString, 'value':'\u1000'},
{'type':tString, 'value':'\u1031'},
{'type':tString, 'value':'\u102f'},
{'type':tString, 'value':'\u102c'},
{'type':tString, 'value':'\u1036'}
]
},
{
'length':6,
'lhs':[
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u1004\u103a\u1039'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'}
],
'rhs':[
{'type':tString, 'value':'\u1004\u103a\u1039'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1},
{'type':tReference, 'index':3}
]
},
{
'length':5,
'lhs':[
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u103c'},
{'type':tString, 'value':'\u1004\u103a\u1039'}
],
'rhs':[
{'type':tString, 'value':'\u1004\u103a\u1039'},
{'type':tReference, 'index':0},
{'type':tString, 'value':'\u103c'}
]
},
{
'length':5,
'lhs':[
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u1031'},
{'type':tString, 'value':'\u1004\u103a\u1039'}
],
'rhs':[
{'type':tString, 'value':'\u1004\u103a\u1039'},
{'type':tReference, 'index':0},
{'type':tString, 'value':'\u1031'}
]
},
{
'length':5,
'lhs':[
{'type':tString, 'value':'\u101e'},
{'type':tString, 'value':'\u103c'},
{'type':tString, 'value':'\u1031'},
{'type':tString, 'value':'\u102c'},
{'type':tString, 'value':'\u103a'}
],
'rhs':[
{'type':tString, 'value':'\u102a'}
]
},
{
'length':4,
'lhs':[
{'type':tString, 'value':'\u200b'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u103c'}
],
'rhs':[
{'type':tReference, 'index':2},
{'type':tReference, 'index':3},
{'type':tReference, 'index':1}
]
},
{
'length':4,
'lhs':[
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u103b\u103c\u103e\u103d'},
{'type':tAnyOfString, 'value':'\u103b\u103c\u103e\u103d'},
{'type':tAnyOfString, 'value':'\u103b\u103c\u103e\u103d'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':2},
{'type':tReference, 'index':3},
{'type':tReference, 'index':0}
]
},
{
'length':4,
'lhs':[
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u1004\u103a\u1039'}
],
'rhs':[
{'type':tString, 'value':'\u1004\u103a\u1039'},
{'type':tReference, 'index':0}
]
},
{
'length':4,
'lhs':[
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tAnyOfString, 'value':'\u103e\u103a'},
{'type':tAnyOfString, 'value':'\u103e\u103a'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':2},
{'type':tReference, 'index':3},
{'type':tReference, 'index':0}
]
},
{
'length':3,
'lhs':[
{'type':tString, 'value':'\u200b'},
{'type':tString, 'value':'\u103c'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'}
],
'rhs':[
{'type':tBackRefString, 'index':2, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tString, 'value':'\u1031'},
{'type':tString, 'value':'\u1039'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tReference, 'index':2},
{'type':tString, 'value':'\u1031'}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u102f\u1030'},
{'type':tString, 'value':'\u1036'},
{'type':tAnyOfString, 'value':'\u102d\u102e\u1032\u102f\u1030'}
],
'rhs':[
{'type':tReference, 'index':2},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u103b\u103c\u103e\u103d'},
{'type':tAnyOfString, 'value':'\u103b\u103c\u103e\u103d'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':2},
{'type':tReference, 'index':0}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u1004'},
{'type':tString, 'value':'\u103a'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u1004'},
{'type':tString, 'value':'\u103a'}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u103a'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tBackRefString, 'index':1, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u103a'}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u103a'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tBackRefString, 'index':1, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u103a'}
]
},
{
'length':3,
'lhs':[
{'type':tString, 'value':'\u1025'},
{'type':tString, 'value':'\u1039'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'}
],
'rhs':[
{'type':tString, 'value':'\u1009'},
{'type':tReference, 'index':1},
{'type':tReference, 'index':2}
]
},
{
'length':3,
'lhs':[
{'type':tString, 'value':'\u200b'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'}
],
'rhs':[
{'type':tBackRefString, 'index':2, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tString, 'value':'\u1039'},
{'type':tString, 'value':'\u101b'}
],
'rhs':[
{'type':tString, 'value':'\u105a'}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u102d\u102e\u1033\u1032\u1034\u1035\u1036'},
{'type':tString, 'value':'\u1039'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tBackRefString, 'index':2, 'value':'\u1000\u1001\u1002\u1003\u105a\u1005\u1006\u1007\u105b\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u1021\u105c\u105d'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u103d'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u103d'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u103e'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u103e'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u102d\u102e'},
{'type':tString, 'value':'\u103e'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'}
],
'rhs':[
{'type':tString, 'value':'\u1031'},
{'type':tBackRefString, 'index':1, 'value':'\u101d\u101b\u1002'}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1032'},
{'type':tString, 'value':'\u102f'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u102d\u102e'},
{'type':tString, 'value':'\u103b'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u102f'},
{'type':tAnyOfString, 'value':'\u102d\u102e'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u102d\u102e'},
{'type':tString, 'value':'\u103d'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u105e\u105f\u1060'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1036'},
{'type':tAnyOfString, 'value':'\u102d\u102e\u1032\u102f\u1030'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u1036'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u1036'}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u103b\u103c\u103e\u103d'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1031'},
{'type':tString, 'value':'\u103a'}
],
'rhs':[
{'type':tReference, 'index':1},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1025'},
{'type':tString, 'value':'\u102c'}
],
'rhs':[
{'type':tString, 'value':'\u1009'},
{'type':tString, 'value':'\u102c'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u102c'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u102c'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u102d'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u102d'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u102e'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u102e'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u1032'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u1032'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u102b'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u102b'}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1007'},
{'type':tString, 'value':'\u103b'}
],
'rhs':[
{'type':tString, 'value':'\u105b'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u102d\u102e\u1033\u1032\u1034\u1035\u1036'},
{'type':tAnyOfString, 'value':'\u105e\u105f\u1060\u103e\u103d'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u105e\u105f\u1060\u103e\u103d'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u101e'},
{'type':tString, 'value':'\u103c'}
],
'rhs':[
{'type':tString, 'value':'\u1029'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u103a'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u103a'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1040\u1047\u1048'},
{'type':tString, 'value':'\u103b'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101d\u101b\u1002'},
{'type':tString, 'value':'\u103b'}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1025'},
{'type':tString, 'value':'\u103a'}
],
'rhs':[
{'type':tString, 'value':'\u1009'},
{'type':tString, 'value':'\u103a'}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u101e'},
{'type':tString, 'value':'\u103c'}
],
'rhs':[
{'type':tString, 'value':'\u1029'}
]
}
]
}
window['KMKL'] = keyboard;
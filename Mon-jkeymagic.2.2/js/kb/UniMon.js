var keyboard ={
'name':'UniMon',
'autobksp':true,
'trackcaps':false,
'eat':true,
'hotkey': 'Ctrl + Shift + U',
'rules': [
{
'length':5,
'lhs':[
{'type':tString, 'value':'\u101e'},
{'type':tString, 'value':'\u103c'},
{'type':tString, 'value':'\u1031'},
{'type':tString, 'value':'\u102c'},
{'type':tAnyOfString, 'value':'\u0066'}
],
'rhs':[
{'type':tString, 'value':'\u102a'}
]
},
{
'length':4,
'lhs':[
{'type':tAnyOfString, 'value':'\u103d'},
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u006a'}
],
'rhs':[
{'type':tBackRefString, 'index':3, 'value':'\u103c'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1},
{'type':tReference, 'index':2}
]
},
{
'length':4,
'lhs':[
{'type':tAnyOfString, 'value':'\u103d'},
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u0073'}
],
'rhs':[
{'type':tBackRefString, 'index':3, 'value':'\u103b'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1},
{'type':tReference, 'index':2}
]
},
{
'length':3,
'lhs':[
{'type':tString, 'value':'\u200b'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u1005\u1006\u1007\u1008\u1009\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u105c\u1021\u105d'}
],
'rhs':[
{'type':tReference, 'index':2},
{'type':tString, 'value':'\u1031'}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u0047'}
],
'rhs':[
{'type':tBackRefString, 'index':2, 'value':'\u103d'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u006a'}
],
'rhs':[
{'type':tBackRefString, 'index':2, 'value':'\u103c'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u103d'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u006a'}
],
'rhs':[
{'type':tBackRefString, 'index':2, 'value':'\u103c'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u0073'}
],
'rhs':[
{'type':tBackRefString, 'index':2, 'value':'\u103b'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u103d'},
{'type':tString, 'value':'\u1031'},
{'type':tAnyOfString, 'value':'\u0073'}
],
'rhs':[
{'type':tBackRefString, 'index':2, 'value':'\u103b'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u103d'},
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tAnyOfString, 'value':'\u006a'}
],
'rhs':[
{'type':tBackRefString, 'index':2, 'value':'\u103c'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tAnyOfString, 'value':'\u103d'},
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tAnyOfString, 'value':'\u0073'}
],
'rhs':[
{'type':tBackRefString, 'index':2, 'value':'\u103b'},
{'type':tReference, 'index':0},
{'type':tReference, 'index':1}
]
},
{
'length':3,
'lhs':[
{'type':tString, 'value':'\u1031'},
{'type':tString, 'value':'\u1039'},
{'type':tAnyOfString, 'value':'\u1000\u1001\u1002\u1003\u1005\u1006\u1007\u1008\u1009\u100a\u100b\u100c\u100d\u100e\u100f\u1010\u1011\u1012\u1013\u1014\u1015\u1016\u1017\u1018\u1019\u101a\u101b\u101c\u101d\u101e\u101f\u1020\u105c\u1021\u105d'}
],
'rhs':[
{'type':tString, 'value':'\u1039'},
{'type':tReference, 'index':2},
{'type':tString, 'value':'\u1031'}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u103a'},
{'type':tString, 'value':'\u1037'}
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
{'type':tAnyOfString, 'value':'\u0073\u006a\u0053\u0047\u0045\u0052\u0056'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u103b\u103c\u103e\u103d\u105e\u105f\u1060'},
{'type':tString, 'value':'\u1031'}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tAnyOfString, 'value':'\u0047'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u103d'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tAnyOfString, 'value':'\u006a'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u103c'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u103d'},
{'type':tAnyOfString, 'value':'\u006a'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u103c'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u103e'},
{'type':tAnyOfString, 'value':'\u0073'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u103b'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u103d'},
{'type':tAnyOfString, 'value':'\u0073'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u103b'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1038'},
{'type':tAnyOfString, 'value':'\u0068'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u1037'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1037'},
{'type':tAnyOfString, 'value':'\u0067\u006d'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u102b\u102c'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1036'},
{'type':tString, 'value':'\u004a'}
],
'rhs':[
{'type':tString, 'value':'\u1032'},
{'type':tString, 'value':'\u1036'}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1037'},
{'type':tAnyOfString, 'value':'\u006b\u006c'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u102f\u1030'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1037'},
{'type':tAnyOfString, 'value':'\u004a\u0048'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u1032\u1036'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1037'},
{'type':tAnyOfString, 'value':'\u0064\u0044\u003a\u004b'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u102d\u102e\u1033\u1035'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1032\u1036'},
{'type':tAnyOfString, 'value':'\u0064\u0044\u003a\u004b'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u102d\u102e\u1033\u1035'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u1032\u1036'},
{'type':tAnyOfString, 'value':'\u006b\u006c'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u102f\u1030'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tAnyOfString, 'value':'\u102f\u1030'},
{'type':tAnyOfString, 'value':'\u0064\u0044\u003a\u004b'}
],
'rhs':[
{'type':tBackRefString, 'index':1, 'value':'\u102d\u102e\u1033\u1035'},
{'type':tReference, 'index':0}
]
},
{
'length':2,
'lhs':[
{'type':tString, 'value':'\u1025'},
{'type':tString, 'value':'\u0044'}
],
'rhs':[
{'type':tString, 'value':'\u1026'}
]
},
{
'length':1,
'lhs':[
{'type':tAnyOfString, 'value':'\u0073\u006a\u0053\u0047\u0045\u0052\u0056'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u103b\u103c\u103e\u103d\u105e\u105f\u1060'}
]
},
{
'length':1,
'lhs':[
{'type':tString, 'value':'\u0066'}
],
'rhs':[
{'type':tString, 'value':'\u103a'}
]
},
{
'length':1,
'lhs':[
{'type':tAnyOfString, 'value':'\u0067\u006d\u0068\u003b'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u102b\u102c\u1037\u1038'}
]
},
{
'length':1,
'lhs':[
{'type':tAnyOfString, 'value':'\u0071\u0077\u0065\u0072\u0074\u0079\u0075\u0069\u006f\u0070\u005b\u007a\u0078\u0063\u0076\u0062\u006e\u0051\u004f\u0050\u007b\u0041\u004c\u005a\u0058\u0043\u004e\u0021\u0023\u0040\u0025\u005e\u0026\u002a\u005f\u003d\u002b\u002d\u005c\u005d\u0028\u0029\u007c\u0057\u0054\u0059\u0055\u0049\u004d\u0027\u0022\u002f\u003f\u0024\u003c\u003e\u0042'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u1006\u1010\u1014\u1019\u1021\u1015\u1000\u105a\u101e\u1005\u101f\u1016\u1011\u1001\u101c\u1018\u100a\u105d\u1025\u100f\u1027\u1017\u1034\u1007\u100c\u1003\u1009\u100d\u100b\u100e\u105b\u1008\u101b\u1002\u1004\u003d\u002b\u002d\u104f\u1029\u0028\u0029\u1024\u105c\u1028\u104c\u103f\u104d\u1026\u1012\u1013\u104b\u104a\u1023\u101d\u104e\u1020'}
]
},
{
'length':1,
'lhs':[
{'type':tAnyOfString, 'value':'\u0031\u0032\u0033\u0034\u0035\u0036\u0037\u0038\u0039\u0030'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u1041\u1042\u1043\u1044\u1045\u1046\u1047\u1048\u1049\u1040'}
]
},
{
'length':1,
'lhs':[
{'type':tAnyOfString, 'value':'\u002c\u002e\u005d\u007d'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u101a\u002e\u1029\u102a'}
]
},
{
'length':1,
'lhs':[
{'type':tAnyOfString, 'value':'\u006b\u006c'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u102f\u1030'}
]
},
{
'length':1,
'lhs':[
{'type':tAnyOfString, 'value':'\u0064\u0044\u003a\u004b'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u102d\u102e\u1033\u1035'}
]
},
{
'length':1,
'lhs':[
{'type':tAnyOfString, 'value':'\u004a\u0048'}
],
'rhs':[
{'type':tBackRefString, 'index':0, 'value':'\u1032\u1036'}
]
},
{
'length':1,
'lhs':[
{'type':tString, 'value':'\u0046'}
],
'rhs':[
{'type':tString, 'value':'\u1039'}
]
},
{
'length':1,
'lhs':[
{'type':tString, 'value':'\u0061'}
],
'rhs':[
{'type':tString, 'value':'\u200b'},
{'type':tString, 'value':'\u1031'}
]
}
]
}
window['KMKL'] = keyboard;
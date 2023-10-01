let buahbuahan = ['apel','jeruk','nanas'];
let dagingdagingan = ['telur', 'Steak', 'Ikan']
let sayursayuran =  ['brokoli','singkong','terong']

let menutoko = [buahbuahan,dagingdagingan,sayursayuran]

console.log(menutoko[0][1])

for(let menu of menutoko){
    for(let apasaja of menu){
        console.log(apasaja)
    }
}
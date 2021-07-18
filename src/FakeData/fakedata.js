const rides = [
    {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQk44Eln1ojCp8Tn9-jNPfw-x2D1nV9nVF8jA&usqp=CAU',
        type: 'Bike',
        info: [
            {
                driverName: "Mike",
                space: "2",
                price: '45'
            },
            {
                driverName: "John",
                space: "2",
                price: '29'
            },
            {
                driverName: "Sia",
                space: "2",
                price: '30'
            }
        ]
    },
    {
        imgUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPsAAADJCAMAAADSHrQyAAABRFBMVEX////pJiojHyCioaENAwaenJwnS5foGR4AAAAoSZYoT5voAADwgIEpRpTpIibs8PYicbMjaK0mVJ/Q1ub+9/f85ubrPkHoCRHsREcmk84lZawmVqDoFRvwfX70+v0khsUjgb8hebkAZ672r7DyjY7tWVsZFBUkjMloqNUAdbkomdUAZ6/d5vEAV6XQ3u0IUaD1rK3zlpfucnO/2Ozw8PDU09NraWkUDg8tKSqszOaQuds/ntN3tdyfyeZQlMh2t948h8Fmrtq1zON1pc9hk8Skz+ssn9jS6vZ+o8uhv9xDgrxGreCbstOLyOpnu+aLpctFdLNug7UCPpK0vtf60dH3vL7tZGb509P96uv0n6HqNDd3jLsAOZCfrc3sUVODgoJCX6HJyclMSkpbbqiKlbxeXFzk5OR2dHVBPj+0s7RBU5gAGID0IGI0AAAGdElEQVR4nO3ZaVfaShwGcEWBRISIsliWKCgoGgOKimChiguK1xaCgFvdam177/d/f2cSoICC4ZK49D6/c9rjCWOGJ//JZCYODAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAW8bnxHg2mUwnk/F4TuBf++u8DF5IpubnIpFAYHrqt7nNj+k499rfTU9c/GNmmqaux56r+/CB/rf56c/Mz4upKVLtacXj7DVz+8e51/6qGhMOlHo3NI/3lvDE/qc/KH52a4wkD9SyBwKR6amtTGZesbm5SQb8VD3/woeFBfIvLbz2l9bEYT4YqCGDPpNKxgWOb5nZeZ4T4nup7U3lAizItuOv9YU1kw0Exxqxn53KuHh6e3OhHv/4Xc98Yn5xTBbZyaoOwuXS2wtK/M/v9s4XdhdrwXsfv7m97X2a/uhdpucOgnYSPBg4/I9Dl88dH73L2gsHi7TowXy2r9Nwe0f7C5/f05qXy+Y9HrvdHhzrL7lysr2jhb3+T/MSePGv/NISTW4PftHonNzx57c25QscVx+N9BEtTpS+XBSWSHC56PZFUbuu+NzbGvdFycqaTCMjI+NUlJJze2rZ7XkNw78x4+xIPbhX4fF6mrPbPbt/avqSVM/ubdIS3k7meTJYHdVTRz89OYhT50m5PEPEYrGzs+XZ2VFidnb57Cw2M1M+IT301UWvvCYl/Eg0ykpeT6FYLOYL9qVo4463kwd8cOxAHHCUZ0MV//LMSbXqdHa+DiThqdPprFZPTsozMRJw1L9SCV25zm1ui8XirvHJzDL5R3rQYvG5KqOx6ktdgHsric6y3uLXUvNrJ14sHRRq6emyLhgc24nzA85YyEYT+My2wcHB83OXyzWpcLnOz8/JsUGbzWauZVEy0ng2alAF8stut61SfpH4E2TQsxdP7za57K78oFOW8yQ/2cmQ/OXZyjmtoK+WqZ2ajN0vgNltnj3VP7twaRph7zt+zGd3xxYXg7X0EWJ6J0mfVdXymT9EBrKvqbq9aLpWTYd+x/f5znTPztHsF12bCNmD/GJQzq/sZCORzE46Lj+tT51VclvTu3rU71+h/IrRNrXDcpMKEQpdXV3RW2XyqrLip59XQi4bHU21K2Bzu5w6Z6d1t359thkvHu5sBcikF4nU32EEprfmU0lt30w6quXlq0GSX0k/o+W5HytJJpM0obIxJ2ZTO5lpWvmI/P5Kfp8xl9lJpeOCoNVVcJwsuyxmGt6yrNEpn1a0mtjxHn+HJ9cgSS5CZkt5exdRLgZ9RT+/nUon47m+39RVV3w0vXu03xN1IUisSSq1HiM7mYuChzzgCwfZ51bgPMcJgiiK8RpRzOUErqd1++qt8frH+g/jQ+thZ8VNRr5ltpdT9aZoZdmb5gN8tuglCxuvd0nmOdSvb9ntdwPDMOu/Vh9/VKa3vX73/MQly0olrkG8iEbp6nYpWviSFQV6RK7h6q0+/a/dMeFEwvhEcOp0kox7i16z/TdSdnZE3sjJq/poVF7PRy/a9y9Ddx2+X1+MTNgw/P2h4+cOEt4c0qHjAfqAo9lZE1tb1CsbmmjhiZ3bOqN96dcZg4G57tbC4bINuk8075gq1bI36j4uF/2ppqth5pfGvdPow12jkxnPrVfh76Va9kb4TtHJqGeYNU07vybRw9+fazXj1umOL0pWa1v2aKFT40TYoOU9f0uiG4afP2PFrM/K/pvV2j7oox1XZ9eJxLNV6gFJbmCGnm/ntNiuNOy24aaRvT7ZsZ2X9muMQcP5zjhMsm+oaen32fTYz36TWgpPst90bry6YQjfadXzaoKOeKOapk63papVt00upLbCm7rt6O7C2hVeLjvT+cnerGKJadRrs6+XVmvzbDcudduL/QirmJdVond7+Ke6tmVdFvWlevb6bHfTrfU1GaeMNlP9Gp3kE8882xssfk06bSU0Zafh2a5/gKLZh1XMzCrQUxlUL5Yquqxu/ra2FL59N9tqPUzG6bom/f6Un3Bq10ozk5p02uZeas3e9Z3DzzB9LBm1QMtuSKib6shM79Ig6iMT/1w2SJJ02W2qe5C/sCEx3D/lTKqXiQ59VvQTrbo1HRo2aGtD9byp48sbdTYYDSrehAmrzl7WM5cKD8Yhranu+0X/QgkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwv/Qv2pAM/04RYHQAAAAASUVORK5CYII=',
        type: 'Car',
        info: [
            {
                driverName: "Jack",
                space: "5",
                price: '59'
            },
            {
                driverName: "Spike",
                space: "4",
                price: '40'
            },
            {
                driverName: "Rio",
                space: "4",
                price: '39'
            }
        ]
    },
    {
        imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTB-a4tvdg-6qp1oPVei7EbuD1PRfeKJ1_Nrw&usqp=CAU',
        type: 'Bus',
        info: [
            {
                driverName: "Hanif",
                space: "37",
                price: '300'
            },
            {
                driverName: "GreenLine",
                space: "19",
                price: '450'
            },
            {
                driverName: "S.Alam",
                space: "21",
                price: '420'
            }
        ]
    },
    {
        imgUrl: 'data:image/png;base64,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',
        type: 'Train',
        info: [
            {
                driverName: "Shuborno-Express",
                space: "132",
                price: '570'
            },
            {
                driverName: "Turna-Nishita",
                space: "97",
                price: '490'
            },
            {
                driverName: "Godhuli",
                space: "103",
                price: '520'
            }
        ]
    },
];

export default rides;
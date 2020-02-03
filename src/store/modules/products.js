export default {
  state: {
    products: [
      {
        title: 'Телевизор BBK 19LEM-1043/T2C LED',
        img: 'https://c.dns-shop.ru/thumb/st1/fit/200/200/64f19e906f53be59571615cbc393cf60/73be8b44a549b2a2878d0d7a4a398dbc109fdcdf3399ce12659e85fb4a85ac73.jpg',
        price: 8900
      },
      {
        title: 'Телевизор Polarline 24PL12TC LED',
        img: 'https://c.dns-shop.ru/thumb/st1/fit/200/200/7ef37d4e5af630013b0c69ac2edb0103/c047ffbff0013675f2fc95be88d01417cdc07106cdbef556ff6c7e2a1cee7102.jpg',
        price: 10900
      },
      {
        title: 'Телевизор LG 55SM8600PLA LED',
        img: 'https://c.dns-shop.ru/thumb/st4/fit/200/200/949b210a5a7d5856faae17122472bef7/c7c52c590fb8bd4e5b93b2f8dcdc8f39ae25ca799e05682ac3f356a85e509afb.jpg',
        price: 27000
      },
      {
        title: 'Телевизор ECON EX-39HT001W LED',
        img: 'https://c.dns-shop.ru/thumb/st1/fit/200/200/c6c7d377aecf909ef49eb8383f4255b9/6903b8eb708b7dd1128af1315b5876802cc8d8271e233fc786a07dff1e532eb6.jpg',
        price: 14500
      }
    ]
  },
  mutations: {
  },
  actions: {    
  },
  getters: {
    products: state => state.products
  }
}
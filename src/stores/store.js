import db from '../../db.json'

const state={
  footer:[],
  categories:[],
  campaigns:[],
  products:[],
  filteredProduct:[],
  basket:{
    totalPrice:0.00,
    products:[]
  },
  selectedCategory:'all',
}

const getters={
  getFooter(state){
    return state.footer;
  },
  getCategories(state){
    return state.categories;
  },
  getCampaigns(state){
    return state.campaigns;
  },
  getProducts(state){
    return state.products;
  },
  getFilteredProducts(state){
    return state.filteredProduct;
  }
}

const mutations={
  setFooter(state,payload){
    state.footer=payload
  },
  setCategories(state,payload){
    state.categories=payload
  },
  setCampaigns(state,payload){
    state.campaigns=payload
  },
  setProducts(state,payload){
    state.products=payload
  },
  setProductToBasket(state,id){
    let product=state.products.find(x=>x.id==id)
    state.basket.totalPrice += product.price
    state.basket.products.push(id)
  },
  setCategorizedProduct(state,key){
    state.filteredProduct=[]
    state.selectedCategory=key
    state.products.filter(x=>x.category==key?state.filteredProduct.push(x):null)
  },
  setSearchedProduct(state,id){
    state.filteredProduct=[]
    let product=state.products.find(x=>x.id==id)
    console.log(product)
    state.filteredProduct.push(product)
  }
}

const actions={
  fetchFooter(context){
    context.commit('setFooter',db.footer)
  },
  fetchCategories(context){
    context.commit('setCategories',db.categories)
  },
  fetchCampaigns(context){
    context.commit('setCampaigns',db.campaign)
  },
  fetchProducts(context){
    context.commit('setProducts',db.products)
  }
}

export default{
  state,
  getters,
  mutations,
  actions
}

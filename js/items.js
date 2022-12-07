
export default class ProductDetails {
    constructor(ExternalServices, category) {
      this.itemName = item
      this.category = {}
      this.ExternalServices = ExternalServices
      this.category = category
    }
}

async function init() {
    // use our datasource to get the details for the current product. findProductById will return a promise! use await or .then() to process it
    this.item = await this.ExternalServices(
      this.category
    )
    // once we have the product details we can render out the HTML
    this.renderItemDetails()


    renderItemDetails() {
        const newItem = `<h3>${this.item.name}</h3>
            <p class="type">${this.product.type}</p>
            <p class="description">${this.item.desc}</p>
            <p class="rarity">${this.item.rarity}</p>`

        document.querySelector('.item-detail').innerHTML = newItem
    }
}
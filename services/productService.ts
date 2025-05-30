import axios from 'axios'

interface Product {
  id: number
  title: string
  price: number
  category: string
  description: string
  image: string
  rating: {
    rate: number
    count: number
  }
  stock: number // Added stock field
}

class ProductService {
  private products: Product[] = []

  async fetchProducts(): Promise<Product[]> {
    try {
      const response = await axios.get('https://fakestoreapi.com/products')
      this.products = response.data.map(product => ({
        ...product,
        price: Number((product.price * 1.022).toFixed(2)), // Add 2.2%
        stock: Math.floor(Math.random() * 50) + 10 // Random stock between 10-60
      }))
      return this.products
    } catch (error) {
      console.error('Error fetching products:', error)
      return []
    }
  }

  updateStock(productId: number, quantity: number): void {
    const product = this.products.find(p => p.id === productId)
    if (product) {
      product.stock -= quantity
    }
  }

  getProducts(): Product[] {
    return this.products
  }
}

export const productService = new ProductService()
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { CartProvider } from './context/CartContext.tsx'
import { RouterProvider } from 'react-router-dom'
import { router } from './router'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CategoryProvider } from './context/ProductFilterContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CartProvider>
      <CategoryProvider>
        <RouterProvider router={ router } />
      </CategoryProvider>
    </CartProvider>
  </StrictMode>,
)

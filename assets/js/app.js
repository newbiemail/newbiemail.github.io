const $=(s,c=document)=>c.querySelector(s), $$=(s,c=document)=>[...c.querySelectorAll(s)];
const toast=(m)=>{let t=$('.toast'); if(!t){t=document.createElement('div');t.className='toast';document.body.appendChild(t)} t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800)};
const getStore=(k)=>JSON.parse(localStorage.getItem(k)||'[]'); const setStore=(k,v)=>localStorage.setItem(k,JSON.stringify(v));
$$('[data-wishlist]').forEach(b=>b.addEventListener('click',()=>{const item=b.dataset.wishlist, list=getStore('nmWishlist'); if(!list.includes(item)) list.push(item); setStore('nmWishlist',list); toast('Saved to wishlist');}));
$$('[data-cart]').forEach(b=>b.addEventListener('click',()=>{const item=b.dataset.cart, list=getStore('nmCart'); list.push(item); setStore('nmCart',list); toast('Added to your bag');}));
const year=$('[data-year]'); if(year) year.textContent=new Date().getFullYear();

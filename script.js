/**
 * Morning Mug Coffee House - Interactive Frontend Features
 * - Mobile Navigation Toggle
 * - Order Cart System with WhatsApp Checkout
 * - Table Reservation Form Handling
 * - Contact Form Handling
 * - Smooth Back To Top Button
 */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Navigation Toggle
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const isOpen = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", isOpen);
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (!toggle.contains(e.target) && !nav.contains(e.target) && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  // Contact Form Handling
  const contactForm = document.querySelector("#contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      alert("Thank you! Your message has been sent to Morning Mug Coffee House.");
      contactForm.reset();
    });
  }

  // Back to Top Button
  const backToTop = document.querySelector("#backToTop");
  if (backToTop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        backToTop.style.display = "flex";
      } else {
        backToTop.style.display = "none";
      }
    }, { passive: true });

    backToTop.addEventListener("click", () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Table Reservation Form Handling
  const reservationForm = document.querySelector("#reservationForm");
  const reservationMessage = document.querySelector("#reservationMessage");
  const reservationDate = document.querySelector("#reservationDate");

  if (reservationDate) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    reservationDate.min = `${yyyy}-${mm}-${dd}`;
  }

  if (reservationForm) {
    reservationForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const name = document.querySelector("#reservationName")?.value.trim() || "Guest";
      const date = document.querySelector("#reservationDate")?.value || "";
      const time = document.querySelector("#reservationTime")?.value || "";
      const guests = document.querySelector("#reservationGuests")?.value || "";

      if (reservationMessage) {
        reservationMessage.hidden = false;
        reservationMessage.innerHTML = `
          <strong>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>
            Reservation Request Received
          </strong>
          <p>Thank you, ${name}. Your table request for ${date} at ${time} for ${guests} has been recorded.</p>
          <small>Demo Notice: This is a front-end simulation for Morning Mug Coffee House.</small>
        `;
        reservationMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
      }

      if (window.trackReservation) {
        window.trackReservation({
          name: name,
          phone: document.querySelector("#reservationPhone")?.value || document.querySelector("input[type='tel']")?.value || "01320989282",
          date: date,
          time: time,
          guests: guests,
          notes: document.querySelector("#reservationNotes")?.value || "Table booking from website"
        });
      }

      reservationForm.reset();
      if (reservationDate) {
        const today = new Date();
        reservationDate.min = today.toISOString().split("T")[0];
      }
    });
  }
});

/* ==========================================================================
   MORNING MUG - ORDER CART SYSTEM
   ========================================================================== */
(function () {
  const cart = [];

  function formatPrice(value) {
    const n = Number(String(value).replace(/[^0-9.]/g, "")) || 0;
    return "$" + n.toFixed(2);
  }

  function renderCart() {
    const list = document.getElementById("cartItems");
    const count = document.getElementById("cartCount");
    const total = document.getElementById("cartTotal");
    if (!list || !count || !total) return;

    const itemCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const totalValue = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

    count.textContent = itemCount;
    total.textContent = formatPrice(totalValue);

    if (!cart.length) {
      list.innerHTML = '<p class="empty-cart">Your cart is empty. Click <strong>Add to Order</strong> on any item above to get started.</p>';
      return;
    }

    list.innerHTML = cart.map((item, index) => `
      <div class="cart-item">
        <div class="cart-item-info">
          <strong>${item.name}</strong>
          <span>${formatPrice(item.price)} × ${item.qty}</span>
        </div>
        <div class="cart-controls">
          <button type="button" aria-label="Decrease quantity" data-cart-action="minus" data-index="${index}">−</button>
          <span>${item.qty}</span>
          <button type="button" aria-label="Increase quantity" data-cart-action="plus" data-index="${index}">+</button>
          <button type="button" class="remove-item" data-cart-action="remove" data-index="${index}">Remove</button>
        </div>
      </div>
    `).join("");
  }

  function addItem(name, price, buttonEl) {
    const existing = cart.find(item => item.name === name);
    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({ name, price: Number(String(price).replace(/[^0-9.]/g, "")) || 0, qty: 1 });
    }
    renderCart();

    // Button feedback
    if (buttonEl) {
      const origText = buttonEl.textContent;
      buttonEl.textContent = "Added!";
      buttonEl.style.background = "#2e7d32";
      setTimeout(() => {
        buttonEl.textContent = origText;
        buttonEl.style.background = "";
      }, 900);
    }

    const panel = document.getElementById("cartPanel");
    if (panel) {
      panel.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  document.addEventListener("click", function (event) {
    const orderBtn = event.target.closest(".order-btn");
    if (orderBtn) {
      event.preventDefault();
      let name = orderBtn.dataset.name || "";
      let price = orderBtn.dataset.price || "";

      if (!name) {
        const card = orderBtn.closest(".menu-card");
        name = card?.querySelector("h3")?.textContent.trim() || "Menu Item";
        price = card?.querySelector(".price")?.textContent.trim() || "0";
      }

      addItem(name, price, orderBtn);
      if (window.trackProductClick) {
        window.trackProductClick(name);
      }
      return;
    }

    const actionBtn = event.target.closest("[data-cart-action]");
    if (actionBtn) {
      const index = Number(actionBtn.dataset.index);
      const action = actionBtn.dataset.cartAction;
      if (!cart[index]) return;

      if (action === "plus") cart[index].qty += 1;
      if (action === "minus") cart[index].qty -= 1;
      if (action === "remove" || cart[index].qty <= 0) cart.splice(index, 1);
      renderCart();
      return;
    }

    if (event.target.closest("#clearCartBtn")) {
      cart.length = 0;
      renderCart();
      return;
    }

    if (event.target.closest("#checkoutBtn")) {
      if (!cart.length) {
        alert("Your cart is empty. Please select some coffee or food items first.");
        return;
      }
      const orderText = cart.map(item => `${item.name} (${item.qty}x)`).join(", ");
      const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

      if (window.trackWhatsAppOrder) {
        window.trackWhatsAppOrder(cart.length, total);
      }

      const message = `Hello Morning Mug Coffee House, I would like to place an order: ${orderText}. Total: ${formatPrice(total)}.`;
      const phone = "8801320989282";
      window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank");
    }
  });

  renderCart();
})();

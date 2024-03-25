// js login
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const errorMessage = document.getElementById("error-message");

const loginForm = document.querySelector("form");

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;

    // Validasi email dan password
    if (email === "" || password === "") {
      errorMessage.textContent = "Email atau password tidak boleh kosong";
      errorMessage.style.display = "block";
      return;
    }

    // Simulasi proses login
    if (email === "divavc@gmail.com" && password === "233307072") {
      // Tampilkan alert "Anda berhasil login"
      alert("Anda berhasil login!");
      window.location.href = "order.html"; // Redirect ke halaman dashboard
    } else {
      errorMessage.textContent = "Email atau password salah";
      errorMessage.style.display = "block";
    }
  });

// js order
const items = document.querySelectorAll(".item");
const totalElement = document.getElementById("total-price");

const calculateTotal = () => {
  let total = 0;
  for (const item of items) {
    if (item.classList.contains("selected")) {
      const priceString = item.querySelector(".price").textContent.match(/\d+/)[0];
      const price = parseInt(priceString, 10);
      total += price;
    }
  }
  totalElement.textContent = `Rp ${total}.000`;
};

// Menambahkan event listener untuk checkbox
for (const item of items) {
  item.addEventListener("click", () => {
    item.classList.toggle("selected");
    calculateTotal();
  });
}

// Menghitung total awal
calculateTotal();
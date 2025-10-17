const bikes = [
      { title: "Royal Enfield Classic 350", brand:"Royal Enfield", price: 185000, image: "Royal Enfield Classic 350.jpg" },
      { title: "Yamaha MT-15", brand:"Yamaha", price: 160000, image: "IYamaha MT 15 V2.jpg" },
      { title: "KTM 390", brand:"KTM", price: 230000, image: "KTM 390.jpg" },
      { title: "Bajaj Pulsar NS200", brand:"Bajaj", price: 150000, image: "NS 200.jpg" },
      { title: "Honda Hornet 2.0", brand:"Honda", price: 140000, image: "Honda Hornet 2.0.jpeg.jpg" },
      { title: "TVS Apache RR 310", brand:"TVS", price: 260000, image: "TVS Apache RR 310.jpg" }
    ];

    function renderBikes() {
      const grid = document.getElementById("bikes-list");
      bikes.forEach((bike, index) => {
        const div = document.createElement("div");
        div.className = "product";
        div.innerHTML = `
          <img src="${bike.image}" alt="${bike.title}" />
          <p class="title">${bike.title}</p>
          <p class="brand">${bike.brand}</p>
          <p class="price">₹${bike.price.toLocaleString()}</p>
          <button onclick="openOrderForm(${index})">Book Now</button>
        `;
        grid.appendChild(div);
      });
    }

    let selectedBike = null;

    function openOrderForm(index) {
      selectedBike = bikes[index];
      document.getElementById("overlay").classList.add("active");
      document.getElementById("order-form").classList.add("active");
    }

    function closeForm() {
      document.getElementById("overlay").classList.remove("active");
      document.getElementById("order-form").classList.remove("active");
    }

    document.getElementById("orderDetails").addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value;
      alert(`Thank you ${name}! Your booking for '${selectedBike.title}' has been placed successfully.`);
      closeForm();
    });

    window.onload = renderBikes;

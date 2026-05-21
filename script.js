// ==========================================================================
// ১. মোডাল ওপেন এবং ক্লোজ করার ফাংশনসমূহ (Modal Controls)
// ==========================================================================

// --- ইলেকট্রিক্যাল মোডাল ---
function openModal() {
  const electricalModal = document.getElementById("electronicsModal");
  if (electricalModal) {
    electricalModal.style.display = "block";
  }
}

function closeModal() {
  const electricalModal = document.getElementById("electronicsModal");
  if (electricalModal) {
    electricalModal.style.display = "none";
  }
}

// --- গ্যাস মোডাল ---
function openGasModal() {
  const gasModal = document.getElementById("gasModal");
  if (gasModal) {
    gasModal.style.display = "block";
  }
}

function closeGasModal() {
  const gasModal = document.getElementById("gasModal");
  if (gasModal) {
    gasModal.style.display = "none";
  }
}

// --- স্যানিটারি মোডাল ---
function openSanitaryModal() {
  const sanitaryModal = document.getElementById("sanitaryModal");
  if (sanitaryModal) {
    sanitaryModal.style.display = "block";
  }
}

function closeSanitaryModal() {
  const sanitaryModal = document.getElementById("sanitaryModal");
  if (sanitaryModal) {
    sanitaryModal.style.display = "none";
  }
}

// ==========================================================================
// ২. উইন্ডো বা ব্যাকগ্রাউন্ডে ক্লিক করলে মোডাল স্বয়ংক্রিয়ভাবে বন্ধ হওয়ার লজিক
// ==========================================================================
window.onclick = function(event) {
  const electricalModal = document.getElementById("electronicsModal");
  const gasModal = document.getElementById("gasModal");
  const sanitaryModal = document.getElementById("sanitaryModal");

  if (event.target === electricalModal) {
    electricalModal.style.display = "none";
  }
  if (event.target === gasModal) {
    gasModal.style.display = "none";
  }
  if (event.target === sanitaryModal) {
    sanitaryModal.style.display = "none";
  }
};

// ==========================================================================
// ৩. ডাইনামিক কন্টেন্ট লোডার (আপনার switch-case এর সঠিক রূপ)
// এটি তখনই কাজ করবে যদি আপনার HTML-এ 'rightSideContainer' আইডির কোনো ডিভ থাকে
// ==========================================================================
function loadServiceContent(jobType) {
  const rightSideContainer = document.getElementById("rightSideContainer");
  
  if (!rightSideContainer) return; // যদি কন্টেইনার না থাকে তবে কোড এখানেই থেমে যাবে

  switch (jobType) {
    case "gas-job":
      rightSideContainer.innerHTML = `
        <div class="service-container">
          <h2 class="service-title">২. গ্যাস সার্ভিস ও মূল্যতালিকা</h2>
          <table class="price-table">
            <thead>
              <tr>
                <th class="th-left">সেবার বিবরণ</th>
                <th class="th-right">মজুরি (টাকা)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="td-left">গ্যাস চুলা মেরামত (মালামাল ছাড়া)</td>
                <td class="td-right">ফিক্সড রেট</td>
              </tr>
              <tr>
                <td class="td-left">লিক চেক</td>
                <td class="td-right">১০০৳</td>
              </tr>
              <tr>
                <td class="td-left">চুলা লাগানো (ছোট চুলা)</td>
                <td class="td-right">২৭০৳</td>
              </tr>
              <tr>
                <td class="td-left">চুলা লাগানো (বড় চুলা)</td>
                <td class="td-right">৪২০৳</td>
              </tr>
              <tr>
                <td class="td-left">বার্নার পরিষ্কার</td>
                <td class="td-right">১৬০৳</td>
              </tr>
            </tbody>
          </table>
        </div>
      `;
      break;
      
    default:
      rightSideContainer.innerHTML = `<p>অনুগ্রহ করে একটি সার্ভিস সিলেক্ট করুন।</p>`;
  }
                                           }

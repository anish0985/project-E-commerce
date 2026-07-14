/* ===========================
   PANDEY CART - Main JavaScript
   =========================== */

// ===========================
// Mock Product Data (Prices in INR)
// ===========================
const products = [
    {
        id: 1,
        name: 'MacBook Pro 16" M3 Max',
        category: 'laptops',
        brand: 'Apple',
        price: 289999,
        originalPrice: 329999,
        mrp: 329999,
        rating: 4.9,
        reviews: 2847,
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600&q=80',
        badge: 'New',
        trending: true,
        bestseller: true,
        flashSale: true,
        deal: true,
        description: 'Powerhouse performance with M3 Max chip'
    },
    {
        id: 2,
        name: 'Sony WH-1000XM5',
        category: 'audio',
        brand: 'Sony',
        price: 28990,
        originalPrice: 32990,
        mrp: 32990,
        rating: 4.8,
        reviews: 5621,
        image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=600&q=80',
        badge: 'Best Seller',
        trending: true,
        bestseller: true,
        flashSale: true,
        description: 'Industry-leading noise cancellation'
    },
    {
        id: 3,
        name: 'Apple Watch Ultra 2',
        category: 'wearables',
        brand: 'Apple',
        price: 89900,
        originalPrice: 99900,
        mrp: 99900,
        rating: 4.9,
        reviews: 3201,
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=600&q=80',
        badge: 'Hot',
        trending: true,
        bestseller: true,
        flashSale: true,
        deal: true,
        description: 'Adventure-ready titanium smartwatch'
    },
    {
        id: 4,
        name: 'iPhone 15 Pro Max',
        category: 'electronics',
        brand: 'Apple',
        price: 159900,
        originalPrice: 179900,
        mrp: 179900,
        rating: 4.8,
        reviews: 8932,
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=600&q=80',
        badge: 'New',
        trending: true,
        bestseller: true,
        flashSale: true,
        deal: true,
        description: 'Titanium design with A17 Pro chip'
    },
    {
        id: 5,
        name: 'Canon EOS R5',
        category: 'cameras',
        brand: 'Canon',
        price: 329999,
        originalPrice: 359999,
        mrp: 359999,
        rating: 4.9,
        reviews: 1247,
        image: 'https://images.unsplash.com/photo-1606986628253-49ebbf913723?w=600&q=80',
        badge: 'Pro',
        trending: true,
        bestseller: true,
        description: '45MP full-frame mirrorless'
    },
    {
        id: 6,
        name: 'PlayStation 5 Pro',
        category: 'gaming',
        brand: 'Sony',
        price: 54990,
        originalPrice: 64990,
        mrp: 64990,
        rating: 4.9,
        reviews: 12453,
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&q=80',
        badge: 'Hot',
        trending: true,
        bestseller: true,
        flashSale: true,
        deal: true,
        description: 'Next-gen gaming console'
    },
    {
        id: 7,
        name: 'AirPods Pro 2',
        category: 'audio',
        brand: 'Apple',
        price: 19900,
        originalPrice: 24900,
        mrp: 24900,
        rating: 4.7,
        reviews: 9821,
        image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=600&q=80',
        badge: 'Sale',
        bestseller: true,
        flashSale: true,
        description: 'Adaptive Audio with USB-C'
    },
    {
        id: 8,
        name: 'Samsung Galaxy S24 Ultra',
        category: 'electronics',
        brand: 'Samsung',
        price: 129999,
        originalPrice: 149999,
        mrp: 149999,
        rating: 4.8,
        reviews: 4521,
        image: 'https://images.unsplash.com/photo-1610792516775-01de03eae630?w=600&q=80',
        badge: 'New',
        trending: true,
        deal: true,
        description: 'Galaxy AI powered flagship'
    },
    {
        id: 9,
        name: 'Bose QuietComfort Ultra',
        category: 'audio',
        brand: 'Bose',
        price: 31990,
        originalPrice: 36990,
        mrp: 36990,
        rating: 4.7,
        reviews: 3421,
        image: 'https://images.unsplash.com/photo-1545127398-14699f92334b?w=600&q=80',
        badge: 'Premium',
        trending: true,
        flashSale: true,
        description: 'Immersive Audio experience'
    },
    {
        id: 10,
        name: 'Dell XPS 15 OLED',
        category: 'laptops',
        brand: 'Dell',
        price: 159999,
        originalPrice: 189999,
        mrp: 189999,
        rating: 4.6,
        reviews: 1847,
        image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&q=80',
        badge: 'Sale',
        bestseller: true,
        description: 'Stunning OLED display'
    },
    {
        id: 11,
        name: 'Nintendo Switch OLED',
        category: 'gaming',
        brand: 'Nintendo',
        price: 29990,
        originalPrice: 34990,
        mrp: 34990,
        rating: 4.9,
        reviews: 7821,
        image: 'https://images.unsplash.com/photo-1612036782180-6f0822045d23?w=600&q=80',
        badge: 'Best Seller',
        bestseller: true,
        flashSale: true,
        description: 'Vibrant 7-inch OLED screen'
    },
    {
        id: 12,
        name: 'Apple HomePod 2',
        category: 'home',
        brand: 'Apple',
        price: 27900,
        originalPrice: 32900,
        mrp: 32900,
        rating: 4.6,
        reviews: 2103,
        image: 'https://images.unsplash.com/photo-1589003077984-894e133dabab?w=600&q=80',
        badge: 'New',
        deal: true,
        description: 'Premium smart speaker'
    },
    {
        id: 13,
        name: 'Garmin Fenix 8',
        category: 'wearables',
        brand: 'Garmin',
        price: 89990,
        originalPrice: 99990,
        mrp: 99990,
        rating: 4.8,
        reviews: 1547,
        image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&q=80',
        badge: 'Premium',
        trending: true,
        description: 'Ultimate multisport GPS watch'
    },
    {
        id: 14,
        name: 'DJI Mavic 4 Pro',
        category: 'cameras',
        brand: 'DJI',
        price: 189999,
        originalPrice: 219999,
        mrp: 219999,
        rating: 4.9,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=600&q=80',
        badge: 'Pro',
        deal: true,
        description: 'Professional aerial cinematography'
    },
    {
        id: 15,
        name: 'Logitech MX Master 3S',
        category: 'accessories',
        brand: 'Logitech',
        price: 9990,
        originalPrice: 11990,
        mrp: 11990,
        rating: 4.8,
        reviews: 6234,
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=600&q=80',
        badge: 'Best Seller',
        bestseller: true,
        flashSale: true,
        description: 'Flagship productivity mouse'
    },
    {
        id: 16,
        name: 'Samsung Galaxy Watch 6',
        category: 'wearables',
        brand: 'Samsung',
        price: 39990,
        originalPrice: 44990,
        mrp: 44990,
        rating: 4.6,
        reviews: 2847,
        image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=600&q=80',
        badge: 'Sale',
        description: 'Wellness-focused smartwatch'
    },
    {
        id: 17,
        name: 'Sonos Era 300',
        category: 'home',
        brand: 'Sonos',
        price: 44990,
        originalPrice: 49990,
        mrp: 49990,
        rating: 4.7,
        reviews: 1547,
        image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&q=80',
        badge: 'Premium',
        deal: true,
        description: 'Spatial audio smart speaker'
    },
    {
        id: 18,
        name: 'Razer Blade 16',
        category: 'laptops',
        brand: 'Razer',
        price: 249999,
        originalPrice: 289999,
        mrp: 289999,
        rating: 4.7,
        reviews: 892,
        image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&q=80',
        badge: 'Hot',
        trending: true,
        description: 'Ultimate gaming laptop'
    },
    {
        id: 19,
        name: 'Xbox Series X',
        category: 'gaming',
        brand: 'Microsoft',
        price: 49990,
        originalPrice: 59990,
        mrp: 59990,
        rating: 4.9,
        reviews: 9821,
        image: 'https://images.unsplash.com/photo-1621259182978-fbf93132d53d?w=600&q=80',
        badge: 'Best Seller',
        bestseller: true,
        flashSale: true,
        description: 'Most powerful Xbox ever'
    },
    {
        id: 20,
        name: 'GoPro Hero 12 Black',
        category: 'cameras',
        brand: 'GoPro',
        price: 39990,
        originalPrice: 49990,
        mrp: 49990,
        rating: 4.7,
        reviews: 3201,
        image: 'https://images.unsplash.com/photo-1606986628253-49ebbf913723?w=600&q=80',
        badge: 'Sale',
        flashSale: true,
        description: '5.3K action camera'
    }
];

const categories = [
    { id: 'audio', name: 'Audio', icon: '🎧', count: 124 },
    { id: 'wearables', name: 'Wearables', icon: '⌚', count: 89 },
    { id: 'laptops', name: 'Laptops', icon: '💻', count: 67 },
    { id: 'cameras', name: 'Cameras', icon: '📷', count: 54 },
    { id: 'gaming', name: 'Gaming', icon: '🎮', count: 92 },
    { id: 'home', name: 'Smart Home', icon: '🏠', count: 78 },
    { id: 'electronics', name: 'Electronics', icon: '📱', count: 156 },
    { id: 'accessories', name: 'Accessories', icon: '⌨️', count: 203 }
];

const brands = [
    'Apple', 'Sony', 'Samsung', 'Bose', 'Canon', 'DJI',
    'Nintendo', 'Microsoft', 'Logitech', 'Garmin', 'Razer', 'Dell'
];

const heroBrands = ['Apple', 'Samsung', 'Sony', 'ASUS', 'Bose', 'Dell'];

const reviews = [
    {
        name: 'Rajesh Kumar', initial: 'RK', rating: 5,
        title: 'Exceptional quality',
        text: 'The MacBook Pro M3 Max exceeded all my expectations. Build quality, performance, and display are simply unmatched. Pandey Cart delivery was lightning fast!',
        verified: true, product: 'MacBook Pro 16"', date: '2 days ago', location: 'Mumbai'
    },
    {
        name: 'Priya Sharma', initial: 'PS', rating: 5,
        title: 'Best in class',
        text: 'The Sony WH-1000XM5 headphones are phenomenal. Noise cancellation is industry-leading, and battery life is incredible. Worth every rupee!',
        verified: true, product: 'Sony WH-1000XM5', date: '5 days ago', location: 'Delhi'
    },
    {
        name: 'Amit Patel', initial: 'AP', rating: 5,
        title: 'Premium experience',
        text: 'Customer service is outstanding. Had a small query about my Apple Watch order and got a response within minutes. Product arrived in pristine condition.',
        verified: true, product: 'Apple Watch Ultra 2', date: '1 week ago', location: 'Bangalore'
    },
    {
        name: 'Sneha Reddy', initial: 'SR', rating: 5,
        title: 'Top tier service',
        text: 'Pandey Cart has become my go-to for premium tech. The curation is excellent, prices competitive, and shipping is always free. Highly recommend!',
        verified: true, product: 'iPhone 15 Pro Max', date: '2 weeks ago', location: 'Hyderabad'
    },
    {
        name: 'Vikram Singh', initial: 'VS', rating: 5,
        title: 'Authentic and fast',
        text: 'Ordered the Canon EOS R5 and it arrived the next day in perfect condition. Packaging was premium and the camera is everything I hoped for.',
        verified: true, product: 'Canon EOS R5', date: '3 weeks ago', location: 'Pune'
    },
    {
        name: 'Ananya Iyer', initial: 'AI', rating: 5,
        title: 'Worth every rupee',
        text: 'The PS5 Pro is an absolute beast. Pandey Cart made the entire purchase seamless. Will definitely shop here again for future tech upgrades!',
        verified: true, product: 'PlayStation 5 Pro', date: '1 month ago', location: 'Chennai'
    }
];

const trackingStages = [
    { name: 'Order Placed', icon: '📝', desc: 'We have received your order' },
    { name: 'Packed', icon: '📦', desc: 'Your order is being packed' },
    { name: 'Shipped', icon: '🚚', desc: 'Your order is on the way' },
    { name: 'Out For Delivery', icon: '🛵', desc: 'Out for delivery to your address' },
    { name: 'Delivered', icon: '✅', desc: 'Order delivered successfully' }
];

const coupons = {
    'PANDEY20': { type: 'percent', value: 20, minOrder: 0, maxDiscount: 50000, label: '20% off' },
    'FIRST1500': { type: 'flat', value: 1500, minOrder: 5000, label: '₹1,500 off' },
    'WELCOME10': { type: 'percent', value: 10, minOrder: 0, maxDiscount: 10000, label: '10% off' }
};

// ===========================
// State Management
// ===========================
let cart = JSON.parse(localStorage.getItem('pandeycart_cart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('pandeycart_wishlist') || '[]');
let user = JSON.parse(localStorage.getItem('pandeycart_user') || 'null');
let orders = JSON.parse(localStorage.getItem('pandeycart_orders') || '[]');
let addresses = JSON.parse(localStorage.getItem('pandeycart_addresses') || '[]');
let activeCategory = 'all';
let activeFilter = 'all';
let searchCategory = 'all';
let currentOtp = null;
let pendingMobile = '';
let appliedCoupon = null;
let checkoutData = { subtotal: 0, discount: 0, couponDiscount: 0, gst: 0, total: 0 };
let orderProgressTimers = {};

// ===========================
// Utility Functions
// ===========================
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const formatPrice = (price) => {
    return '₹' + Math.round(price).toLocaleString('en-IN');
};

const calcDiscount = (original, current) => {
    if (!original || !current || original <= current) return 0;
    return Math.round(((original - current) / original) * 100);
};

const saveState = () => {
    localStorage.setItem('pandeycart_cart', JSON.stringify(cart));
    localStorage.setItem('pandeycart_wishlist', JSON.stringify(wishlist));
    localStorage.setItem('pandeycart_user', JSON.stringify(user));
    localStorage.setItem('pandeycart_orders', JSON.stringify(orders));
    localStorage.setItem('pandeycart_addresses', JSON.stringify(addresses));
};

const generateOrderId = () => '#PC' + Date.now().toString().slice(-8);
const generateTxnId = () => 'TXN' + Date.now().toString() + Math.random().toString(36).substr(2, 4).toUpperCase();
const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// ===========================
// Toast Notification
// ===========================
let toastTimeout;
const showToast = (message) => {
    const toast = $('#toast');
    const msg = $('#toastMessage');
    if (!toast || !msg) return;
    msg.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 3000);
};

// ===========================
// AUTHENTICATION SYSTEM
// ===========================
const sendOTP = async (mobile) => {
    const otp = generateOTP();
    currentOtp = otp;
    pendingMobile = mobile;
    console.log(`%c📱 OTP for +91 ${mobile}: ${otp}`, 'color: #ff6b00; font-size: 14px; font-weight: bold;');
    return otp;
};

const verifyOTP = (enteredOtp) => enteredOtp === currentOtp;

const showAuthView = (view) => {
    ['loginView', 'otpView', 'registerView', 'forgotView'].forEach(v => {
        const el = $(`#${v}`);
        if (el) el.classList.add('hidden');
    });
    const target = $(`#${view}`);
    if (target) {
        target.classList.remove('hidden');
        $('#authModal').classList.remove('hidden');
        document.body.classList.add('no-scroll');
    }
};

const closeAuth = () => {
    $('#authModal').classList.add('hidden');
    document.body.classList.remove('no-scroll');
    currentOtp = null;
    pendingMobile = '';
    ['loginForm', 'otpForm', 'registerForm', 'forgotForm'].forEach(id => {
        const form = $(`#${id}`);
        if (form) form.reset();
    });
    $$('.otp-input').forEach(i => i.value = '');
    const otpDemo = $('#otpDemo');
    if (otpDemo) otpDemo.classList.add('hidden');
};

// ===========================
// AUTH EVENT HANDLERS
// ===========================
const initAuth = () => {
    const loginForm = $('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const mobile = $('#loginMobile').value.trim();
            if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) {
                showToast('Please enter a valid 10-digit mobile number');
                return;
            }
            await sendOTP(mobile);
            $('#otpMobile').textContent = '+91 ' + mobile;
            $('#otpDemoCode').textContent = currentOtp;
            $('#otpDemo').classList.remove('hidden');
            showAuthView('otpView');
            setTimeout(() => { const firstInput = $$('.otp-input')[0]; if (firstInput) firstInput.focus(); }, 200);
            showToast(`OTP sent to +91 ${mobile}`);
        });
    }

    const otpForm = $('#otpForm');
    if (otpForm) {
        otpForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const enteredOtp = Array.from($$('.otp-input')).map(i => i.value).join('');
            if (enteredOtp.length !== 6) { showToast('Please enter complete 6-digit OTP'); return; }
            if (verifyOTP(enteredOtp)) {
                const savedUsers = JSON.parse(localStorage.getItem('pandeycart_users') || '{}');
                if (savedUsers[pendingMobile]) {
                    user = { ...savedUsers[pendingMobile], mobile: pendingMobile };
                } else {
                    user = { name: 'User', mobile: pendingMobile, email: '', loggedInAt: new Date().toISOString() };
                    savedUsers[pendingMobile] = user;
                    localStorage.setItem('pandeycart_users', JSON.stringify(savedUsers));
                }
                saveState();
                closeAuth();
                showToast(`Welcome${user.name && user.name !== 'User' ? ' back, ' + user.name : ''}! 🎉`);
                updateAccountUI();
            } else {
                showToast('Invalid OTP. Please try again.');
            }
        });
    }

    $$('.otp-input').forEach((input, idx) => {
        input.addEventListener('input', (e) => {
            const val = e.target.value.replace(/\D/g, '');
            e.target.value = val;
            if (val && idx < 5) { const next = $$('.otp-input')[idx + 1]; if (next) next.focus(); }
        });
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && idx > 0) {
                const prev = $$('.otp-input')[idx - 1];
                if (prev) prev.focus();
            }
        });
        input.addEventListener('paste', (e) => {
            e.preventDefault();
            const pasted = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
            pasted.split('').forEach((char, i) => { if ($$('.otp-input')[i]) $$('.otp-input')[i].value = char; });
            if (pasted.length === 6) { const lastInput = $$('.otp-input')[5]; if (lastInput) lastInput.focus(); }
        });
    });

    const resendBtn = $('#resendOtp');
    if (resendBtn) {
        resendBtn.addEventListener('click', async () => {
            if (pendingMobile) {
                await sendOTP(pendingMobile);
                $('#otpDemoCode').textContent = currentOtp;
                showToast('OTP resent successfully');
            }
        });
    }

    const registerForm = $('#registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = $('#regName').value.trim();
            const mobile = $('#regMobile').value.trim();
            const email = $('#regEmail').value.trim();
            const password = $('#regPassword').value;
            const confirmPassword = $('#regConfirmPassword').value;

            if (!name) { showToast('Please enter your name'); return; }
            if (mobile.length !== 10 || !/^\d{10}$/.test(mobile)) { showToast('Please enter a valid 10-digit mobile number'); return; }
            if (!email || !email.includes('@')) { showToast('Please enter a valid email'); return; }
            if (password.length < 6) { showToast('Password must be at least 6 characters'); return; }
            if (password !== confirmPassword) { showToast('Passwords do not match'); return; }

            const savedUsers = JSON.parse(localStorage.getItem('pandeycart_users') || '{}');
            savedUsers[mobile] = { name, email, password };
            localStorage.setItem('pandeycart_users', JSON.stringify(savedUsers));
            
            user = { name, mobile, email, loggedInAt: new Date().toISOString() };
            saveState();
            closeAuth();
            showToast(`Welcome ${name}! Account created successfully 🎉`);
            updateAccountUI();
        });
    }

    const forgotForm = $('#forgotForm');
    if (forgotForm) {
        forgotForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const mobile = $('#forgotMobile').value.trim();
            if (mobile.length !== 10) { showToast('Please enter a valid mobile number'); return; }
            const savedUsers = JSON.parse(localStorage.getItem('pandeycart_users') || '{}');
            if (!savedUsers[mobile]) { showToast('No account found with this mobile number'); return; }
            await sendOTP(mobile);
            user = { name: savedUsers[mobile].name, mobile, email: savedUsers[mobile].email };
            saveState();
            showToast('Password reset successful. You are now logged in.');
            closeAuth();
            updateAccountUI();
        });
    }

    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-show-register]') || e.target.closest('[data-show-register]')) showAuthView('registerView');
        if (e.target.matches('[data-show-login]') || e.target.closest('[data-show-login]')) showAuthView('loginView');
        if (e.target.matches('[data-show-forgot]') || e.target.closest('[data-show-forgot]')) showAuthView('forgotView');
        if (e.target.matches('[data-close-auth]') || e.target.closest('[data-close-auth]')) closeAuth();
        if (e.target.id === 'authBackdrop') closeAuth();
    });
};

// ===========================
// ACCOUNT DASHBOARD
// ===========================
const updateAccountUI = () => {
    if (user) {
        const initial = user.name ? user.name.charAt(0).toUpperCase() : 'U';
        const setText = (id, val) => { const el = $(id); if (el) el.textContent = val; };
        setText('#accountAvatar', initial);
        setText('#accountName', user.name || 'User');
        setText('#accountMobile', '+91 ' + user.mobile);
        const setVal = (id, val) => { const el = $(id); if (el) el.value = val; };
        setVal('#profileName', user.name || '');
        setVal('#profileEmail', user.email || '');
        setVal('#profileMobile', user.mobile || '');
    }
};

const switchTab = (tab) => {
    $$('.account-content').forEach(c => c.classList.add('hidden'));
    $$('.account-tab').forEach(t => t.classList.remove('bg-white/5', 'text-saffron-400'));
    const tabContent = $(`#tab-${tab}`);
    if (tabContent) tabContent.classList.remove('hidden');
    $$(`.account-tab[data-tab="${tab}"]`).forEach(t => t.classList.add('bg-white/5', 'text-saffron-400'));
};

const renderOrders = () => {
    const list = $('#ordersList');
    if (!list) return;
    if (orders.length === 0) {
        list.innerHTML = '<div class="glass-card rounded-xl p-8 text-center"><p class="text-white/50">No orders yet. Start shopping!</p></div>';
        return;
    }
    list.innerHTML = orders.slice().reverse().map(o => `
        <div class="glass-card rounded-xl p-4">
            <div class="flex justify-between items-start mb-3">
                <div>
                    <div class="font-mono font-bold text-saffron-400 text-sm">${o.id}</div>
                    <div class="text-xs text-white/50">${new Date(o.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</div>
                </div>
                <div class="text-right">
                    <div class="font-bold">${formatPrice(o.total)}</div>
                    <div class="text-xs text-green-400">${o.currentStage || 'Order Placed'}</div>
                </div>
            </div>
            <div class="flex gap-2 mb-3">
                ${o.items.slice(0, 3).map(it => `<img src="${it.image}" class="w-12 h-12 rounded-lg object-contain bg-white/5" onerror="this.style.display='none'" />`).join('')}
                ${o.items.length > 3 ? `<div class="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-xs text-white/60">+${o.items.length - 3}</div>` : ''}
            </div>
            <button class="track-order-btn w-full text-sm py-2 glass-card border border-white/10 hover:border-saffron-500/30 rounded-lg transition" data-order-id="${o.id}">Track Order</button>
        </div>
    `).join('');
};

const renderAccountWishlist = () => {
    const list = $('#accountWishlist');
    if (!list) return;
    if (wishlist.length === 0) {
        list.innerHTML = '<div class="glass-card rounded-xl p-8 text-center"><p class="text-white/50">Wishlist is empty</p></div>';
        return;
    }
    list.innerHTML = wishlist.map(id => {
        const p = products.find(pr => pr.id === id);
        if (!p) return '';
        return `<div class="cart-item"><div class="cart-item-image"><img src="${p.image}" onerror="this.style.display='none'" /></div><div class="flex-1 min-w-0"><h4 class="font-semibold text-sm line-clamp-2">${p.name}</h4><div class="font-bold text-saffron-400 mt-1">${formatPrice(p.price)}</div></div></div>`;
    }).join('');
};

const renderAddresses = () => {
    const list = $('#addressesList');
    if (!list) return;
    if (addresses.length === 0) {
        list.innerHTML = '<div class="glass-card rounded-xl p-8 text-center"><p class="text-white/50 mb-3">No saved addresses</p></div>';
        return;
    }
    list.innerHTML = addresses.map((a, idx) => `
        <div class="glass-card rounded-xl p-4">
            <div class="flex justify-between items-start mb-2">
                <span class="text-xs uppercase tracking-wider text-saffron-400 font-semibold">${a.type || 'Home'}</span>
                <button class="text-red-400 text-xs hover:text-red-300" data-delete-address="${idx}">Delete</button>
            </div>
            <div class="font-semibold text-sm">${a.name}</div>
            <div class="text-xs text-white/60 mt-1">${a.address}, ${a.city}, ${a.state} - ${a.pincode}</div>
            <div class="text-xs text-white/60">Mobile: +91 ${a.mobile}</div>
        </div>
    `).join('');
};

// ===========================
// CHECKOUT FLOW
// ===========================
const openCheckout = () => {
    if (!user) { closeAllDrawers(); showAuthView('loginView'); showToast('Please login to continue'); return; }
    if (cart.length === 0) { showToast('Your cart is empty'); return; }
    closeAllDrawers();
    renderCheckout();
    const checkout = $('#checkoutPage');
    if (checkout) { checkout.classList.remove('hidden'); document.body.classList.add('no-scroll'); }
    const setVal = (id, val) => { const el = $(id); if (el) el.value = val; };
    setVal('#shipName', user.name || '');
    setVal('#shipMobile', user.mobile || '');
};

const closeCheckout = () => {
    const checkout = $('#checkoutPage');
    if (checkout) checkout.classList.add('hidden');
    document.body.classList.remove('no-scroll');
    appliedCoupon = null;
};

const calculateCheckout = () => {
    let subtotal = 0, discount = 0;
    cart.forEach(item => {
        const p = products.find(pr => pr.id === item.id);
        if (p) {
            subtotal += p.price * item.qty;
            if (p.originalPrice && p.originalPrice > p.price) {
                discount += (p.originalPrice - p.price) * item.qty;
            }
        }
    });
    let couponDiscount = 0;
    if (appliedCoupon) {
        if (appliedCoupon.type === 'percent') {
            couponDiscount = Math.min(Math.round(subtotal * appliedCoupon.value / 100), appliedCoupon.maxDiscount || Infinity);
        } else {
            couponDiscount = appliedCoupon.value;
        }
    }
    const afterDiscount = Math.max(0, subtotal - couponDiscount);
    const gst = Math.round(afterDiscount * 0.18);
    const total = afterDiscount + gst;
    return { subtotal, discount, couponDiscount, gst, total };
};

const renderCheckout = () => {
    const items = $('#checkoutItems');
    if (!items) return;
    items.innerHTML = cart.map(item => {
        const p = products.find(pr => pr.id === item.id);
        if (!p) return '';
        return `<div class="flex gap-3"><div class="w-14 h-14 rounded-lg bg-white/5 shrink-0 flex items-center justify-center overflow-hidden"><img src="${p.image}" class="w-12 h-12 object-contain" onerror="this.style.display='none'" /></div><div class="flex-1 min-w-0"><div class="text-sm font-semibold line-clamp-2">${p.name}</div><div class="text-xs text-white/50">Qty: ${item.qty}</div></div><div class="text-sm font-bold">${formatPrice(p.price * item.qty)}</div></div>`;
    }).join('');
    
    const calc = calculateCheckout();
    checkoutData = calc;
    const setEl = (id, val) => { const el = $(id); if (el) el.textContent = val; };
    setEl('#checkoutSubtotal', formatPrice(calc.subtotal));
    setEl('#checkoutDiscount', '-' + formatPrice(calc.discount));
    setEl('#checkoutCoupon', '-' + formatPrice(calc.couponDiscount));
    setEl('#checkoutGst', formatPrice(calc.gst));
    setEl('#checkoutTotal', formatPrice(calc.total));
};

const initCheckout = () => {
    const goToCheckout = $('#goToCheckout');
    if (goToCheckout) goToCheckout.addEventListener('click', openCheckout);
    
    const checkoutClose = $('#checkoutClose');
    if (checkoutClose) checkoutClose.addEventListener('click', closeCheckout);
    
    const checkoutBackdrop = $('#checkoutBackdrop');
    if (checkoutBackdrop) {
        checkoutBackdrop.addEventListener('click', (e) => { if (e.target === checkoutBackdrop) closeCheckout(); });
    }

    const applyCoupon = $('#applyCoupon');
    if (applyCoupon) {
        applyCoupon.addEventListener('click', () => {
            const input = $('#couponInput');
            const code = input ? input.value.trim().toUpperCase() : '';
            if (!code) return;
            const coupon = coupons[code];
            const msg = $('#couponMessage');
            if (!msg) return;
            if (!coupon) {
                msg.className = 'mt-2 text-sm text-red-400';
                msg.textContent = '✗ Invalid coupon code';
                msg.classList.remove('hidden');
                appliedCoupon = null;
            } else {
                const calc = calculateCheckout();
                if (calc.subtotal < coupon.minOrder) {
                    msg.className = 'mt-2 text-sm text-red-400';
                    msg.textContent = `✗ Minimum order of ${formatPrice(coupon.minOrder)} required`;
                    msg.classList.remove('hidden');
                    appliedCoupon = null;
                } else {
                    appliedCoupon = coupon;
                    msg.className = 'mt-2 text-sm text-green-400';
                    msg.textContent = `✓ Coupon "${code}" applied successfully! You saved ${formatPrice(calculateCheckout().couponDiscount)}`;
                    msg.classList.remove('hidden');
                }
            }
            renderCheckout();
        });
    }

    document.addEventListener('click', (e) => {
        const sug = e.target.closest('.coupon-suggest');
        if (sug) {
            const input = $('#couponInput');
            if (input) input.value = sug.dataset.coupon;
            applyCoupon?.click();
        }
    });

    const placeOrderBtn = $('#placeOrderBtn');
    if (placeOrderBtn) {
        placeOrderBtn.addEventListener('click', () => {
            const form = $('#shippingForm');
            if (!form) return;
            if (!form.checkValidity()) { form.reportValidity(); return; }
            
            const paymentRadio = $('input[name="payment"]:checked');
            const paymentMethod = paymentRadio ? paymentRadio.value : 'upi';
            
            if (paymentMethod === 'upi') {
                closeCheckout();
                showUpiModal();
            } else {
                processOrder(paymentMethod.toUpperCase());
            }
        });
    }
};

// ===========================
// UPI PAYMENT
// ===========================
const showUpiModal = () => {
    const calc = checkoutData;
    const upiAmount = $('#upiAmount');
    if (upiAmount) upiAmount.textContent = formatPrice(calc.total);
    generateQRCode(calc.total);
    const upiModal = $('#upiModal');
    if (upiModal) upiModal.classList.remove('hidden');
};

const closeUpi = () => {
    const upiModal = $('#upiModal');
    if (upiModal) upiModal.classList.add('hidden');
    openCheckout();
};

const generateQRCode = (amount) => {
    const qrData = `upi://pay?pa=pandeycart@upi&pn=PandeyCart&am=${amount}&cu=INR`;
    const qrContainer = $('#qrCode');
    if (!qrContainer) return;
    
    if (typeof qrcode === 'undefined') {
        qrContainer.innerHTML = '<div class="flex flex-col items-center justify-center h-full"><div class="text-6xl">📱</div><div class="text-xs text-gray-700 mt-2 font-bold">UPI QR Code</div><div class="text-[10px] text-gray-500">₹' + amount + '</div></div>';
        return;
    }
    
    try {
        const qr = qrcode(0, 'M');
        qr.addData(qrData);
        qr.make();
        qrContainer.innerHTML = qr.createSvgTag(5, 8);
        const svg = qrContainer.querySelector('svg');
        if (svg) { svg.style.width = '100%'; svg.style.height = '100%'; }
    } catch (e) {
        qrContainer.innerHTML = '<div class="flex items-center justify-center h-full text-xs text-gray-600">QR Code</div>';
    }
};

const initUpi = () => {
    const upiClose = $('#upiClose');
    if (upiClose) upiClose.addEventListener('click', closeUpi);
    
    const copyUpi = $('#copyUpi');
    if (copyUpi) {
        copyUpi.addEventListener('click', () => {
            const upiId = 'pandeycart@upi';
            if (navigator.clipboard && navigator.clipboard.writeText) {
                navigator.clipboard.writeText(upiId).then(() => {
                    copyUpi.textContent = '✓ Copied';
                    setTimeout(() => { copyUpi.textContent = 'Copy'; }, 2000);
                    showToast('UPI ID copied to clipboard');
                }).catch(() => { fallbackCopy(upiId, copyUpi); });
            } else {
                fallbackCopy(upiId, copyUpi);
            }
        });
    }
    
    const confirmPayment = $('#confirmPaymentBtn');
    if (confirmPayment) {
        confirmPayment.addEventListener('click', () => {
            $('#upiModal')?.classList.add('hidden');
            processOrder('UPI');
        });
    }
};

const fallbackCopy = (text, btn) => {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.opacity = '0';
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        if (btn) {
            btn.textContent = '✓ Copied';
            setTimeout(() => { btn.textContent = 'Copy'; }, 2000);
        }
        showToast('UPI ID copied to clipboard');
    } catch (e) {
        showToast('Failed to copy');
    }
    document.body.removeChild(textArea);
};

// ===========================
// ORDER PROCESSING
// ===========================
const processOrder = (paymentMethod) => {
    const calc = checkoutData;
    const getVal = (id) => $(id)?.value || '';
    
    const order = {
        id: generateOrderId(),
        txnId: generateTxnId(),
        userId: user?.mobile || 'guest',
        date: new Date().toISOString(),
        items: cart.map(item => {
            const p = products.find(pr => pr.id === item.id);
            return p ? { ...p, qty: item.qty } : null;
        }).filter(Boolean),
        shipping: {
            name: getVal('#shipName'),
            mobile: getVal('#shipMobile'),
            address: getVal('#shipAddress'),
            city: getVal('#shipCity'),
            state: getVal('#shipState'),
            pincode: getVal('#shipPincode')
        },
        paymentMethod,
        subtotal: calc.subtotal,
        discount: calc.discount,
        couponDiscount: calc.couponDiscount,
        gst: calc.gst,
        total: calc.total,
        currentStage: 'Order Placed',
        stage: 0,
        stages: [
            { name: 'Order Placed', time: new Date().toISOString(), done: true },
            { name: 'Packed', time: null, done: false },
            { name: 'Shipped', time: null, done: false },
            { name: 'Out For Delivery', time: null, done: false },
            { name: 'Delivered', time: null, done: false }
        ]
    };
    
    addresses.push({ ...order.shipping, type: 'Home' });
    orders.push(order);
    cart = [];
    appliedCoupon = null;
    saveState();
    
    showSuccess(order);
    simulateOrderProgress(order.id);
};

const simulateOrderProgress = (orderId) => {
    if (orderProgressTimers[orderId]) orderProgressTimers[orderId].forEach(clearTimeout);
    orderProgressTimers[orderId] = [
        setTimeout(() => updateOrderStage(orderId, 1), 30000),
        setTimeout(() => updateOrderStage(orderId, 2), 60000),
        setTimeout(() => updateOrderStage(orderId, 3), 90000),
        setTimeout(() => updateOrderStage(orderId, 4), 120000)
    ];
};

const updateOrderStage = (orderId, stage) => {
    const order = orders.find(o => o.id === orderId);
    if (order && stage < order.stages.length) {
        order.stage = stage;
        order.currentStage = order.stages[stage].name;
        order.stages[stage].done = true;
        order.stages[stage].time = new Date().toISOString();
        saveState();
        if (!$('#trackingPage').classList.contains('hidden') && 
            $('#trackingOrderId').textContent === orderId) {
            openTracking(orderId);
        }
    }
};

const showSuccess = (order) => {
    const setEl = (id, val) => { const el = $(id); if (el) el.textContent = val; };
    setEl('#successOrderId', order.id);
    setEl('#successTxnId', order.txnId);
    setEl('#successPayMethod', order.paymentMethod);
    setEl('#successAmount', formatPrice(order.total));
    const successPage = $('#successPage');
    if (successPage) successPage.classList.remove('hidden');
    
    const check = successPage?.querySelector('svg path');
    if (check) {
        check.style.animation = 'none';
        setTimeout(() => { check.style.animation = 'successCheck 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s forwards'; }, 50);
    }
};

const initSuccess = () => {
    const continueBtn = $('#continueShoppingBtn');
    if (continueBtn) {
        continueBtn.addEventListener('click', () => {
            $('#successPage')?.classList.add('hidden');
            $('#checkoutPage')?.classList.add('hidden');
            document.body.classList.remove('no-scroll');
            updateCounts();
            renderCart();
            renderWishlist();
            renderAll();
        });
    }
    
    const trackBtn = $('#trackOrderBtn');
    if (trackBtn) {
        trackBtn.addEventListener('click', () => {
            const orderId = $('#successOrderId')?.textContent;
            $('#successPage')?.classList.add('hidden');
            if (orderId) openTracking(orderId);
        });
    }
};

// ===========================
// ORDER TRACKING
// ===========================
const openTracking = (orderId) => {
    const order = orders.find(o => o.id === orderId);
    if (!order) return;
    
    const setText = (id, val) => { const el = $(id); if (el) el.textContent = val; };
    setText('#trackingOrderId', order.id);
    
    const stepsContainer = $('#trackingSteps');
    if (stepsContainer) {
        stepsContainer.innerHTML = order.stages.map((stage, idx) => {
            const isActive = idx === order.stage;
            const isDone = idx <= order.stage;
            return `
                <div class="relative flex items-start gap-4 pl-2">
                    <div class="relative z-10 w-10 h-10 rounded-full flex items-center justify-center text-lg shrink-0 ${isDone ? 'bg-gradient-to-br from-saffron-500 to-red-500 shadow-lg shadow-saffron-500/30' : 'glass-card border border-white/10'}">
                        ${trackingStages[idx].icon}
                    </div>
                    <div class="flex-1 pb-2">
                        <div class="font-semibold ${isDone ? 'text-white' : 'text-white/50'}">${stage.name}</div>
                        <div class="text-xs text-white/40">${stage.time ? new Date(stage.time).toLocaleString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }) : 'Pending'}</div>
                        ${isActive ? '<div class="text-xs text-saffron-400 mt-1 font-semibold">● Current Status</div>' : ''}
                    </div>
                </div>
            `;
        }).join('');
    }
    
    const progress = (order.stage / Math.max(1, order.stages.length - 1)) * 100;
    const progressBar = $('#trackingProgress');
    if (progressBar) {
        progressBar.style.height = '0%';
        setTimeout(() => { progressBar.style.height = progress + '%'; }, 100);
    }
    
    const trackingItems = $('#trackingItems');
    if (trackingItems) {
        trackingItems.innerHTML = order.items.map(it => `
            <div class="flex gap-3 items-center">
                <div class="w-12 h-12 rounded-lg bg-white/5 shrink-0 flex items-center justify-center overflow-hidden"><img src="${it.image}" class="w-10 h-10 object-contain" onerror="this.style.display='none'" /></div>
                <div class="flex-1 min-w-0">
                    <div class="text-sm font-semibold line-clamp-1">${it.name}</div>
                    <div class="text-xs text-white/50">Qty: ${it.qty}</div>
                </div>
                <div class="text-sm font-bold">${formatPrice(it.price * it.qty)}</div>
            </div>
        `).join('');
    }
    
    const eta = new Date();
    eta.setDate(eta.getDate() + 3);
    setText('#trackingETA', eta.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }));
    
    $('#trackingPage')?.classList.remove('hidden');
};

const initTracking = () => {
    const trackingClose = $('#trackingClose');
    if (trackingClose) trackingClose.addEventListener('click', () => $('#trackingPage')?.classList.add('hidden'));
    
    const trackingBackdrop = $('#trackingBackdrop');
    if (trackingBackdrop) {
        trackingBackdrop.addEventListener('click', (e) => {
            if (e.target === trackingBackdrop) $('#trackingPage')?.classList.add('hidden');
        });
    }
    
    document.addEventListener('click', (e) => {
        const trackBtn = e.target.closest('.track-order-btn');
        if (trackBtn) openTracking(trackBtn.dataset.orderId);
    });
};

// ===========================
// Product Card Renderer
// ===========================
const createProductCard = (product) => {
    const inWishlist = wishlist.includes(product.id);
    const discount = product.originalPrice ? calcDiscount(product.originalPrice, product.price) : 0;
    const fallbackImg = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMDAgMjAwIj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsbD0iIzFhMWIyZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBkb21pbmFudC1iYXNlbGluZT0iY2VudHJhbCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzU1NTY3NyIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTQiPkltYWdlPC90ZXh0Pjwvc3ZnPg==";
    
    return `
        <div class="product-card group" data-id="${product.id}" data-category="${product.category}">
            <div class="product-image relative">
                <div class="shimmer"></div>
                <img src="${product.image}" alt="${product.name}" loading="lazy" onerror="this.src='${fallbackImg}'"/>
                <div class="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    ${product.badge ? `<span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-saffron-500 to-red-500 text-white shadow-lg">${product.badge}</span>` : ''}
                    ${discount > 0 ? `<span class="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full bg-green-600 text-white shadow-lg">${discount}% OFF</span>` : ''}
                </div>
                <button class="wishlist-btn ${inWishlist ? 'active' : ''}" data-wishlist="${product.id}" aria-label="Add to wishlist">
                    <svg class="w-4 h-4" fill="${inWishlist ? 'currentColor' : 'none'}" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                </button>
            </div>
            <div class="p-4 space-y-2">
                <div class="flex items-center justify-between text-xs">
                    <span class="text-white/40 uppercase tracking-wider font-semibold">${product.brand}</span>
                    <div class="flex items-center gap-1">
                        <span class="text-yellow-400">★</span>
                        <span class="text-white/60">${product.rating}</span>
                    </div>
                </div>
                <h3 class="font-semibold text-sm line-clamp-2 leading-snug min-h-[2.5em]">${product.name}</h3>
                <p class="text-xs text-white/50 line-clamp-2">${product.description}</p>
                <div class="flex items-end justify-between pt-2">
                    <div>
                        <div class="text-lg font-bold text-white">${formatPrice(product.price)}</div>
                        ${product.originalPrice ? `<div class="text-xs text-white/40 line-through">MRP ${formatPrice(product.mrp || product.originalPrice)}</div>` : ''}
                    </div>
                    <button class="add-to-cart-btn" data-add-cart="${product.id}">
                        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                        Add
                    </button>
                </div>
            </div>
        </div>
    `;
};

// ===========================
// Render Functions
// ===========================
const renderFeaturedCategories = () => {
    const container = $('#featuredCategories');
    if (!container) return;
    container.innerHTML = categories.map(cat => `
        <button data-cat="${cat.id}" class="featured-cat-card group text-left">
            <div class="text-5xl mb-4 group-hover:scale-110 transition-transform">${cat.icon}</div>
            <h3 class="font-semibold text-lg">${cat.name}</h3>
            <p class="text-sm text-white/50 mt-1">${cat.count} products</p>
        </button>
    `).join('');
};

const renderFlashSale = () => {
    const container = $('#flashSaleProducts');
    if (!container) return;
    container.innerHTML = products.filter(p => p.flashSale).map(createProductCard).join('');
};

const renderTrending = () => {
    const container = $('#trendingProducts');
    if (!container) return;
    let items = products.filter(p => p.trending);
    if (activeFilter !== 'all') items = items.filter(p => p.category === activeFilter);
    if (items.length === 0) {
        container.innerHTML = '<p class="col-span-full text-center text-white/50 py-12">No products found in this category.</p>';
        return;
    }
    container.innerHTML = items.map(createProductCard).join('');
};

const renderBestSellers = () => {
    const container = $('#bestSellers');
    if (!container) return;
    container.innerHTML = products.filter(p => p.bestseller).map(createProductCard).join('');
};

const renderBrands = () => {
    const container = $('#brandMarquee');
    if (!container) return;
    container.innerHTML = brands.concat(brands).map(b => `<span class="brand-logo">${b}</span>`).join('');
};

const renderHeroBrands = () => {
    const container = $('#heroBrandMarquee');
    if (!container) return;
    container.innerHTML = heroBrands.concat(heroBrands).map(b => `<span class="hero-brand-logo">${b}</span>`).join('');
};

const renderDeals = () => {
    const container = $('#dealsOfTheDay');
    if (!container) return;
    container.innerHTML = products.filter(p => p.deal).map(p => {
        const discount = p.originalPrice ? calcDiscount(p.originalPrice, p.price) : 0;
        return `
            <div class="deal-card group">
                <div class="flex items-start gap-4">
                    <div class="w-24 h-24 rounded-2xl bg-white/5 flex items-center justify-center shrink-0 overflow-hidden">
                        <img src="${p.image}" alt="${p.name}" class="w-20 h-20 object-contain group-hover:scale-110 transition" loading="lazy" onerror="this.style.display='none'"/>
                    </div>
                    <div class="flex-1 min-w-0">
                        <div class="flex items-center gap-2 mb-1">
                            ${p.badge ? `<span class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-gradient-to-r from-saffron-500 to-red-500">${p.badge}</span>` : ''}
                            ${discount > 0 ? `<span class="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-full bg-green-600/20 text-green-300 border border-green-500/30">${discount}% OFF</span>` : ''}
                        </div>
                        <h3 class="font-semibold text-base mb-1 truncate">${p.name}</h3>
                        <p class="text-xs text-white/50 mb-2 line-clamp-1">${p.description}</p>
                        <div class="flex items-center gap-2 mb-3">
                            <span class="text-xs text-white/40">${p.brand}</span>
                            <span class="text-yellow-400 text-xs">★ ${p.rating}</span>
                        </div>
                        <div class="flex items-end justify-between">
                            <div>
                                <div class="text-xl font-bold">${formatPrice(p.price)}</div>
                                ${p.originalPrice ? `<div class="text-xs text-white/40 line-through">MRP ${formatPrice(p.mrp || p.originalPrice)}</div>` : ''}
                            </div>
                            <button class="add-to-cart-btn" data-add-cart="${p.id}">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                                Add
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};

const renderReviews = () => {
    const container = $('#reviews');
    if (!container) return;
    container.innerHTML = reviews.map(r => `
        <div class="review-card">
            <div class="flex items-center gap-3 mb-4">
                <div class="avatar">${r.initial}</div>
                <div class="flex-1 min-w-0">
                    <div class="flex items-center gap-2">
                        <h4 class="font-semibold text-sm truncate">${r.name}</h4>
                        ${r.verified ? '<svg class="w-4 h-4 text-blue-400 shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>' : ''}
                    </div>
                    <p class="text-xs text-white/50">${r.date} · ${r.location || 'India'} · ${r.product}</p>
                </div>
            </div>
            <div class="flex items-center gap-1 mb-2">
                <span class="text-yellow-400 text-sm">${'★'.repeat(r.rating)}</span>
            </div>
            <h5 class="font-semibold text-sm mb-2">${r.title}</h5>
            <p class="text-sm text-white/70 leading-relaxed">${r.text}</p>
        </div>
    `).join('');
};

const renderAll = () => {
    renderFeaturedCategories();
    renderFlashSale();
    renderTrending();
    renderBestSellers();
    renderHeroBrands();
    renderBrands();
    renderDeals();
    renderReviews();
    renderCart();
    renderWishlist();
    updateCounts();
};

// ===========================
// Cart Functions
// ===========================
const addToCart = (productId) => {
    const existing = cart.find(item => item.id === productId);
    if (existing) existing.qty += 1;
    else cart.push({ id: productId, qty: 1 });
    saveState();
    renderCart();
    updateCounts();
    const product = products.find(p => p.id === productId);
    if (product) showToast(`${product.name.substring(0, 25)}... added to cart`);
};

const removeFromCart = (productId) => {
    cart = cart.filter(item => item.id !== productId);
    saveState();
    renderCart();
    updateCounts();
};

const updateQty = (productId, delta) => {
    const item = cart.find(i => i.id === productId);
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) { removeFromCart(productId); return; }
    saveState();
    renderCart();
    updateCounts();
};

const renderCart = () => {
    const cartItemsEl = $('#cartItems');
    const cartEmptyEl = $('#cartEmpty');
    const cartFooterEl = $('#cartFooter');
    const cartCountEl = $('#cartItemCount');
    if (!cartItemsEl) return;

    if (cart.length === 0) {
        cartItemsEl.classList.add('hidden');
        if (cartEmptyEl) cartEmptyEl.classList.remove('hidden');
        if (cartFooterEl) cartFooterEl.classList.add('hidden');
        if (cartCountEl) cartCountEl.textContent = '(0)';
        return;
    }

    cartItemsEl.classList.remove('hidden');
    if (cartEmptyEl) cartEmptyEl.classList.add('hidden');
    if (cartFooterEl) cartFooterEl.classList.remove('hidden');

    let subtotal = 0;
    cartItemsEl.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.id);
        if (!product) return '';
        subtotal += product.price * item.qty;
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'"/>
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-sm line-clamp-2 leading-snug mb-1">${product.name}</h4>
                    <p class="text-xs text-white/50 mb-2">${product.brand}</p>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2">
                            <button class="qty-btn" data-qty="${product.id}" data-delta="-1">−</button>
                            <span class="text-sm font-semibold w-6 text-center">${item.qty}</span>
                            <button class="qty-btn" data-qty="${product.id}" data-delta="1">+</button>
                        </div>
                        <div class="text-right">
                            <div class="font-bold text-sm">${formatPrice(product.price * item.qty)}</div>
                            <button class="text-xs text-red-400 hover:text-red-300 transition" data-remove="${product.id}">Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    const gst = Math.round(subtotal * 0.18);
    const total = subtotal + gst;
    const setEl = (id, val) => { const el = $(id); if (el) el.textContent = val; };
    setEl('#cartSubtotal', formatPrice(subtotal));
    setEl('#cartGst', formatPrice(gst));
    setEl('#cartTotal', formatPrice(total));
    if (cartCountEl) cartCountEl.textContent = `(${cart.reduce((sum, i) => sum + i.qty, 0)})`;
};

// ===========================
// Wishlist Functions
// ===========================
const toggleWishlist = (productId) => {
    const idx = wishlist.indexOf(productId);
    if (idx > -1) {
        wishlist.splice(idx, 1);
        showToast('Removed from wishlist');
    } else {
        wishlist.push(productId);
        const product = products.find(p => p.id === productId);
        if (product) showToast(`${product.name.substring(0, 25)}... saved to wishlist`);
    }
    saveState();
    renderWishlist();
    updateCounts();
    renderTrending();
    renderBestSellers();
    renderFlashSale();
    renderDeals();
};

const renderWishlist = () => {
    const itemsEl = $('#wishlistItems');
    if (!itemsEl) return;

    if (wishlist.length === 0) {
        itemsEl.classList.add('hidden');
        $('#wishlistEmpty')?.classList.remove('hidden');
        return;
    }

    itemsEl.classList.remove('hidden');
    $('#wishlistEmpty')?.classList.add('hidden');

    itemsEl.innerHTML = wishlist.map(id => {
        const product = products.find(p => p.id === id);
        if (!product) return '';
        return `
            <div class="cart-item">
                <div class="cart-item-image">
                    <img src="${product.image}" alt="${product.name}" onerror="this.style.display='none'"/>
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="font-semibold text-sm line-clamp-2 leading-snug mb-1">${product.name}</h4>
                    <p class="text-xs text-white/50 mb-2">${product.brand}</p>
                    <div class="flex items-center justify-between">
                        <div>
                            <div class="font-bold text-sm">${formatPrice(product.price)}</div>
                            ${product.originalPrice ? `<div class="text-[10px] text-white/40 line-through">MRP ${formatPrice(product.mrp || product.originalPrice)}</div>` : ''}
                        </div>
                        <div class="flex items-center gap-2">
                            <button class="add-to-cart-btn" data-add-cart="${product.id}">
                                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"/></svg>
                                Add
                            </button>
                            <button class="text-pink-400 hover:text-pink-300 p-1" data-remove-wishlist="${product.id}" aria-label="Remove">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }).join('');
};

// ===========================
// Update Counts
// ===========================
const updateCounts = () => {
    const cartCount = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartCountEl = $('#cartCount');
    if (cartCountEl) {
        if (cartCount > 0) {
            cartCountEl.textContent = cartCount;
            cartCountEl.classList.remove('hidden');
        } else {
            cartCountEl.classList.add('hidden');
        }
    }

    const wishCountEl = $('#wishlistCount');
    if (wishCountEl) {
        if (wishlist.length > 0) {
            wishCountEl.textContent = wishlist.length;
            wishCountEl.classList.remove('hidden');
        } else {
            wishCountEl.classList.add('hidden');
        }
    }
};

// ===========================
// Search Functionality
// ===========================
const handleSearch = (query) => {
    const q = query.trim().toLowerCase();
    const resultsEl = $('#searchResults');
    if (!resultsEl) return;
    
    if (!q) { resultsEl.classList.add('hidden'); return; }
    
    const results = products.filter(p =>
        (searchCategory === 'all' || p.category === searchCategory) &&
        (p.name.toLowerCase().includes(q) ||
         p.brand.toLowerCase().includes(q) ||
         p.category.toLowerCase().includes(q) ||
         (p.description && p.description.toLowerCase().includes(q)))
    ).slice(0, 6);

    if (results.length === 0) {
        resultsEl.innerHTML = '<div class="p-6 text-center text-white/50 text-sm">No products found</div>';
    } else {
        resultsEl.innerHTML = results.map(p => `
            <button class="search-result-item w-full flex items-center gap-3 p-3 hover:bg-white/5 transition text-left" data-search-add="${p.id}">
                <div class="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center shrink-0">
                    <img src="${p.image}" alt="${p.name}" class="w-10 h-10 object-contain" onerror="this.style.display='none'"/>
                </div>
                <div class="flex-1 min-w-0">
                    <h4 class="text-sm font-medium truncate">${p.name}</h4>
                    <p class="text-xs text-white/50">${p.brand} · ${p.category}</p>
                </div>
                <div class="text-sm font-semibold text-saffron-400 shrink-0">${formatPrice(p.price)}</div>
            </button>
        `).join('');
    }
    resultsEl.classList.remove('hidden');
};

// ===========================
// Drawer Controls
// ===========================
const closeAllDrawers = () => {
    ['cartDrawer', 'wishlistDrawer'].forEach(id => {
        const el = $(`#${id}`);
        if (el) el.classList.add('hidden');
    });
    document.body.classList.remove('no-scroll');
};

// ===========================
// Event Listeners
// ===========================
const initEventListeners = () => {
    // Cart Drawer
    const cartBtn = $('#cartBtn');
    const cartDrawer = $('#cartDrawer');
    if (cartBtn && cartDrawer) {
        cartBtn.addEventListener('click', () => {
            cartDrawer.classList.remove('hidden');
            document.body.classList.add('no-scroll');
        });
    }
    $('#cartClose')?.addEventListener('click', () => {
        cartDrawer?.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
    $('#cartBackdrop')?.addEventListener('click', () => {
        cartDrawer?.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
    
    // Wishlist Drawer
    const wishlistBtn = $('#wishlistBtn');
    const wishlistDrawer = $('#wishlistDrawer');
    if (wishlistBtn && wishlistDrawer) {
        wishlistBtn.addEventListener('click', () => {
            wishlistDrawer.classList.remove('hidden');
            document.body.classList.add('no-scroll');
        });
    }
    $('#wishlistClose')?.addEventListener('click', () => {
        wishlistDrawer?.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
    $('#wishlistBackdrop')?.addEventListener('click', () => {
        wishlistDrawer?.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
    
    // Account Nav
    $('#accountNavBtn')?.addEventListener('click', () => {
        if (!user) { showAuthView('loginView'); return; }
        updateAccountUI();
        renderOrders();
        renderAccountWishlist();
        renderAddresses();
        switchTab('profile');
        $('#accountDashboard')?.classList.remove('hidden');
        document.body.classList.add('no-scroll');
    });
    
    $('#accountClose')?.addEventListener('click', () => {
        $('#accountDashboard')?.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
    
    $('#accountBackdrop')?.addEventListener('click', () => {
        $('#accountDashboard')?.classList.add('hidden');
        document.body.classList.remove('no-scroll');
    });
    
    // Account Tabs
    $$('.account-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            const tabName = tab.dataset.tab;
            if (tabName) switchTab(tabName);
        });
    });
    
    // Logout
    $('#logoutBtn')?.addEventListener('click', () => {
        user = null;
        saveState();
        $('#accountDashboard')?.classList.add('hidden');
        document.body.classList.remove('no-scroll');
        showToast('Logged out successfully');
    });
    
    // Profile Form
    $('#profileForm')?.addEventListener('submit', (e) => {
        e.preventDefault();
        if (!user) return;
        user.name = $('#profileName').value;
        user.email = $('#profileEmail').value;
        user.mobile = $('#profileMobile').value;
        const savedUsers = JSON.parse(localStorage.getItem('pandeycart_users') || '{}');
        if (savedUsers[user.mobile]) {
            savedUsers[user.mobile] = { ...savedUsers[user.mobile], name: user.name, email: user.email };
            localStorage.setItem('pandeycart_users', JSON.stringify(savedUsers));
        }
        saveState();
        updateAccountUI();
        showToast('Profile updated successfully');
    });
    
    // Delete Address
    document.addEventListener('click', (e) => {
        if (e.target.matches('[data-delete-address]')) {
            const idx = parseInt(e.target.dataset.deleteAddress);
            addresses.splice(idx, 1);
            saveState();
            renderAddresses();
            showToast('Address deleted');
        }
    });
    
    // Event Delegation for product actions
    document.addEventListener('click', (e) => {
        const addBtn = e.target.closest('[data-add-cart]');
        if (addBtn) { e.preventDefault(); e.stopPropagation(); addToCart(parseInt(addBtn.dataset.addCart)); return; }
        
        const rmBtn = e.target.closest('[data-remove]');
        if (rmBtn) { e.preventDefault(); removeFromCart(parseInt(rmBtn.dataset.remove)); return; }
        
        const qtyBtn = e.target.closest('[data-qty]');
        if (qtyBtn) { e.preventDefault(); updateQty(parseInt(qtyBtn.dataset.qty), parseInt(qtyBtn.dataset.delta)); return; }
        
        const wishBtn = e.target.closest('[data-wishlist]');
        if (wishBtn) { e.preventDefault(); e.stopPropagation(); toggleWishlist(parseInt(wishBtn.dataset.wishlist)); return; }
        
        const rmWish = e.target.closest('[data-remove-wishlist]');
        if (rmWish) { e.preventDefault(); toggleWishlist(parseInt(rmWish.dataset.removeWishlist)); return; }
        
        const pill = e.target.closest('.category-pill');
        if (pill) {
            activeCategory = pill.dataset.category;
            $$('.category-pill').forEach(p => p.classList.toggle('active', p === pill));
            renderTrending();
        }
        
        const filter = e.target.closest('.filter-pill');
        if (filter) {
            activeFilter = filter.dataset.filter;
            $$('.filter-pill').forEach(p => p.classList.toggle('active', p === filter));
            renderTrending();
        }
        
        const searchAdd = e.target.closest('[data-search-add]');
        if (searchAdd) {
            e.preventDefault();
            addToCart(parseInt(searchAdd.dataset.searchAdd));
            $('#searchResults')?.classList.add('hidden');
            const searchInput = $('#searchInput');
            if (searchInput) searchInput.value = '';
            return;
        }
        
        const featCat = e.target.closest('[data-cat]');
        if (featCat) {
            activeCategory = featCat.dataset.cat;
            $$('.category-pill').forEach(p => p.classList.toggle('active', p.dataset.category === activeCategory));
            renderTrending();
            $('#products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
    
    // Search Input
    const searchInput = $('#searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
        searchInput.addEventListener('focus', (e) => { if (e.target.value) handleSearch(e.target.value); });
    }
    
    document.addEventListener('click', (e) => {
        if (!e.target.closest('#searchInput') && !e.target.closest('#searchResults')) {
            $('#searchResults')?.classList.add('hidden');
        }
    });
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', (e) => {
            const href = a.getAttribute('href');
            if (href === '#' || href === '#home') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                return;
            }
            const target = document.querySelector(href);
            if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
        });
    });
    
    // Escape key closes modals
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            ['authModal', 'accountDashboard', 'checkoutPage', 'upiModal', 'successPage', 'trackingPage', 'cartDrawer', 'wishlistDrawer'].forEach(id => {
                $(`#${id}`)?.classList.add('hidden');
            });
            document.body.classList.remove('no-scroll');
        }
    });
    
    // Hero Video autoplay
    const video = $('#heroVideo');
    if (video) {
        video.muted = true;
        const playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.catch(() => { video.muted = true; video.play().catch(() => {}); });
        }
    }
    
    // Navbar scroll effect
    const navbar = $('#navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        });
    }
    
    // Reveal on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible');
        });
    }, { threshold: 0.1 });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
};

// ===========================
// Initialize
// ===========================
document.addEventListener('DOMContentLoaded', () => {
    renderAll();
    initAuth();
    initCheckout();
    initUpi();
    initSuccess();
    initTracking();
    initEventListeners();
    updateAccountUI();
});


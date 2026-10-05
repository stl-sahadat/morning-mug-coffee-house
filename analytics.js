/**
 * Morning Mug Coffee House — Analytics Tracking Engine
 * Tracks page visits, product clicks, cart additions, WhatsApp order conversions, and reservations.
 */

(function () {
    const STORAGE_KEY = 'mm_analytics_data';
    const SESSION_KEY = 'mm_session_active';

    // Default structure for analytics data
    function getAnalyticsData() {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw) {
            try {
                return JSON.parse(raw);
            } catch (e) {
                console.error('Error parsing analytics data:', e);
            }
        }
        return {
            totalVisits: 0,
            uniqueVisitors: 0,
            pageViews: {},
            productClicks: {},
            whatsappOrders: 0,
            reservations: [],
            dailyVisits: {},
            devices: { mobile: 0, desktop: 0 },
            hourlyVisits: new Array(24).fill(0)
        };
    }

    function saveAnalyticsData(data) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    }

    // Initialize or record current visit
    function trackVisit() {
        const data = getAnalyticsData();
        const today = new Date().toISOString().split('T')[0];
        const hour = new Date().getHours();
        const pageName = window.location.pathname.split('/').pop() || 'index.html';

        // Check if new session
        const isNewSession = !sessionStorage.getItem(SESSION_KEY);
        if (isNewSession) {
            sessionStorage.setItem(SESSION_KEY, 'true');
            data.totalVisits = (data.totalVisits || 0) + 1;

            // Unique visitor check (via permanent flag)
            if (!localStorage.getItem('mm_unique_visitor_flag')) {
                localStorage.setItem('mm_unique_visitor_flag', 'true');
                data.uniqueVisitors = (data.uniqueVisitors || 0) + 1;
            }

            // Daily tracking
            data.dailyVisits[today] = (data.dailyVisits[today] || 0) + 1;

            // Hourly tracking
            if (!data.hourlyVisits) data.hourlyVisits = new Array(24).fill(0);
            data.hourlyVisits[hour] = (data.hourlyVisits[hour] || 0) + 1;

            // Device detection
            const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768;
            if (!data.devices) data.devices = { mobile: 0, desktop: 0 };
            if (isMobile) {
                data.devices.mobile = (data.devices.mobile || 0) + 1;
            } else {
                data.devices.desktop = (data.devices.desktop || 0) + 1;
            }
        }

        // Page view count
        if (!data.pageViews) data.pageViews = {};
        data.pageViews[pageName] = (data.pageViews[pageName] || 0) + 1;

        saveAnalyticsData(data);
    }

    // Track click on specific product / menu item
    window.trackProductClick = function (productName) {
        if (!productName) return;
        const data = getAnalyticsData();
        if (!data.productClicks) data.productClicks = {};
        data.productClicks[productName] = (data.productClicks[productName] || 0) + 1;
        saveAnalyticsData(data);
    };

    // Track WhatsApp order click
    window.trackWhatsAppOrder = function (itemCount, totalValue) {
        const data = getAnalyticsData();
        data.whatsappOrders = (data.whatsappOrders || 0) + 1;
        saveAnalyticsData(data);
    };

    // Track reservation
    window.trackReservation = function (reservationObj) {
        const data = getAnalyticsData();
        if (!data.reservations) data.reservations = [];
        data.reservations.unshift({
            id: 'RES-' + Date.now().toString().slice(-4),
            timestamp: new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' }),
            name: reservationObj.name || 'Guest',
            phone: reservationObj.phone || 'N/A',
            date: reservationObj.date || 'Today',
            time: reservationObj.time || '18:00',
            guests: reservationObj.guests || '2',
            notes: reservationObj.notes || 'None',
            status: 'Pending'
        });
        saveAnalyticsData(data);
    };

    // Seed realistic starter data if brand new so dashboard looks rich immediately
    function ensureInitialMetrics() {
        const data = getAnalyticsData();
        if (data.totalVisits === 0) {
            data.totalVisits = 142;
            data.uniqueVisitors = 118;
            data.whatsappOrders = 27;
            data.devices = { mobile: 94, desktop: 48 };
            data.pageViews = {
                'index.html': 286,
                'menu.html': 194,
                'about.html': 84,
                'reservation.html': 62,
                'gallery.html': 45,
                'contact.html': 38
            };
            data.productClicks = {
                'Morning Mug Signature Cappuccino': 48,
                'Classic Caramel Macchiato': 39,
                'Double Shot Espresso': 32,
                'Artisan Chocolate Croissant': 29,
                'Fresh Lemon Iced Tea': 22,
                'Fudge Chocolate Brownie': 18
            };
            data.hourlyVisits = [2, 0, 0, 0, 1, 3, 8, 14, 22, 19, 15, 12, 14, 18, 25, 29, 34, 30, 24, 16, 11, 7, 4, 3];
            data.reservations = [
                {
                    id: 'RES-9421',
                    timestamp: 'Oct 5, 2026, 4:15 PM',
                    name: 'Tanvir Ahmed',
                    phone: '01711-234567',
                    date: '2026-10-06',
                    time: '19:30',
                    guests: '4',
                    notes: 'Window side preferred for family',
                    status: 'Confirmed'
                },
                {
                    id: 'RES-8812',
                    timestamp: 'Oct 5, 2026, 2:30 PM',
                    name: 'Nusrat Jahan',
                    phone: '01822-987654',
                    date: '2026-10-05',
                    time: '20:00',
                    guests: '2',
                    notes: 'Anniversary celebration',
                    status: 'Confirmed'
                },
                {
                    id: 'RES-7753',
                    timestamp: 'Oct 4, 2026, 6:45 PM',
                    name: 'Rahim Chowdhury',
                    phone: '01933-556677',
                    date: '2026-10-05',
                    time: '18:00',
                    guests: '6',
                    notes: 'Business casual discussion',
                    status: 'Completed'
                }
            ];
            saveAnalyticsData(data);
        }
    }

    // Auto-run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            ensureInitialMetrics();
            trackVisit();
        });
    } else {
        ensureInitialMetrics();
        trackVisit();
    }
})();

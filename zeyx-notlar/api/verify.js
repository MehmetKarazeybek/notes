exports.handler = async (event) => {
    if (event.httpMethod !== 'POST') return { statusCode: 405, body: 'Method Not Allowed' };

    try {
        const { code } = JSON.parse(event.body);
        const match = code.match(/^ZEYX-(\d{6})-OK$/);

        // Lisans Algoritması: 97'ye bölümünden kalan 42 olmalı
        if (match && (parseInt(match[1]) % 97 === 42)) {
            return { statusCode: 200, body: JSON.stringify({ success: true }) };
        }
        return { statusCode: 403, body: JSON.stringify({ success: false }) };
    } catch (e) {
        return { statusCode: 500, body: JSON.stringify({ success: false }) };
    }
};
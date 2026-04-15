function renderUnitInfo(unitId) {
    const data = unitDatabase[unitId];
    
    // 生成地籍明細表格 HTML
    let tableRows = data.landDetails.map(land => `
        <tr>
            <td style="padding:10px; border-bottom:1px solid #eee;">${land.id}</td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${land.private} 坪</td>
            <td style="padding:10px; border-bottom:1px solid #eee;">${land.public} 坪</td>
            <td style="padding:10px; border-bottom:1px solid #eee; font-weight:700;">${land.total} 坪</td>
        </tr>
    `).join('');

    // 插入到專屬顯示區塊
    document.getElementById('personal-info').innerHTML = `
        <div class="info-card" style="border: 2px solid var(--gold-accent);">
            <h3 class="serif" style="color:var(--forest-deep);">${data.title}</h3>
            <hr style="margin:15px 0; opacity:0.1;">
            
            <div style="display:grid; grid-template-columns: repeat(2, 1fr); gap:15px; margin-bottom:20px;">
                <p><strong>認購總價：</strong><span class="highlight-gold">${data.summary.price} 萬元</span></p>
                <p><strong>總計面積：</strong>${data.summary.totalArea} 坪</p>
                <p><strong>土地單價：</strong>${data.summary.unitPrice} 萬元/坪</p>
                <p><strong>持分比例：</strong>${data.summary.shareRatio}</p>
            </div>

            <h4 class="serif" style="font-size:1rem; margin-bottom:10px; color:var(--forest-mid);">地籍明細清單</h4>
            <table style="width:100%; font-size:0.85rem; text-align:left; border-collapse:collapse;">
                <thead>
                    <tr style="background:#f9f9f9;">
                        <th style="padding:10px;">地號</th><th style="padding:10px;">專有面積</th><th style="padding:10px;">公設持分</th><th style="padding:10px;">小計</th>
                    </tr>
                </thead>
                <tbody>${tableRows}</tbody>
            </table>
            
            <p style="margin-top:20px; font-size:0.9rem; color:#666; background:#fffcf5; padding:15px; border-radius:4px;">
                <strong>顧問筆記：</strong>${data.note}
            </p>
        </div>
    `;
}

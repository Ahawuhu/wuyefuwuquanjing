const themeColor = '#5AC17A';

const typeMeta = {
  遗留问题: { label: '遗留问题', color: '#F59E0B', icon: '!' },
  大事记: { label: '服务大事记', color: '#14B8A6', icon: '★' },
  服务评分: { label: '服务评分', color: '#38BDF8', icon: '☆' },
  服务履约: { label: '服务履约', color: '#22C55E', icon: '✓' },
  公共收益: { label: '公共收益', color: '#0EA5E9', icon: '¥' },
  维修资金: { label: '维修资金', color: '#10B981', icon: '🔧' },
  工作总结: { label: '工作总结', color: '#8B5CF6', icon: '月' }
};

const disclosures = [
  {
    id: 'summary-202605',
    type: '工作总结',
    title: '演示小区2026年5月物业服务月报',
    date: '2026-06-05',
    status: '公示中',
    brief: '5月共受理业主诉求256起，完结率99.2%，回访满意率98.5%，同步完成工程维保、秩序维护、环境美化与社区活动。',
    details: [
      ['呈报对象', '全体业主/住户'],
      ['公示周期', '2026/05/01 - 2026/05/31'],
      ['发布日期', '2026/06/05'],
      ['诉求处理', '256起，完结率99.2%'],
      ['回访满意率', '98.5%'],
      ['重点计划', '防汛准备、端午活动、制冷季排查、电动车专项整治']
    ],
    summary: '本月服务重点围绕客户服务、工程维修、秩序维护、环境美化和社区文化活动展开。客服诉求处理保持高完成率，公共设施维修和设备房巡检按计划推进，消防演练与楼道清理降低安全隐患，绿化补栽和道路清洗提升小区环境品质。'
  },
  {
    id: 'legacy-001',
    type: '遗留问题',
    title: '地下车库局部渗水专项整改公示',
    date: '2026-06-03',
    status: '公示中',
    brief: '地下车库B区局部渗水已纳入专项整改，完成原因排查并进入施工排期。',
    details: [
      ['问题位置', '地下车库B区东侧墙面'],
      ['问题状态', '整改中'],
      ['责任部门', '工程维修部'],
      ['预计完成', '2026/06/18']
    ],
    summary: '已完成渗水点位排查，后续将进行墙面防水修复、排水沟清理和复查验收。'
  },
  {
    id: 'milestone-001',
    type: '大事记',
    title: '消防演练及楼道杂物集中清理',
    date: '2026-06-02',
    status: '公示中',
    brief: '物业服务中心组织全员消防演练，并对重点楼栋楼道杂物进行集中清理。',
    hasPhoto: true,
    details: [
      ['创建人', '秩序维护部'],
      ['创建时间', '2026/06/02 16:20'],
      ['附件', '消防演练记录.pdf、现场照片3张']
    ],
    summary: '本次行动重点提升人员应急处置能力，清理废弃纸壳、旧家具共2车，进一步消除楼道消防隐患。'
  },
  {
    id: 'score-001',
    type: '服务评分',
    title: '2026年5月物业服务评分分析',
    date: '2026-06-01',
    status: '公示中',
    brief: '本月服务综合评分96.8分，客户回访满意率98.5%，投诉建议处理闭环率100%。',
    details: [
      ['数据月份', '2026年5月'],
      ['综合评分', '96.8分'],
      ['回访满意率', '98.5%'],
      ['投诉闭环率', '100%']
    ],
    summary: '高频正向反馈集中在客服响应、维修效率和园区环境；后续将持续优化装修管理提醒和电梯维保通知触达。'
  },
  {
    id: 'performance-001',
    type: '服务履约',
    title: '2026年5月物业服务履约情况',
    date: '2026-05-31',
    status: '公示中',
    brief: '客服、工程、秩序、环境四大服务模块均按月度计划履约，核心指标达成率稳定。',
    details: [
      ['数据周期', '2026/05/01 - 2026/05/31'],
      ['客服履约', '99.2%'],
      ['工程巡检', '60次'],
      ['环境消杀', '2次'],
      ['创建人', '项目服务中心'],
      ['创建时间', '2026/05/31 18:00']
    ],
    summary: '本期履约重点包含报修处理、公共照明维修、设备房巡检、门岗管控、公共区域消杀和绿化养护。'
  },
  {
    id: 'income-001',
    type: '公共收益',
    title: '2026年5月公共收益收支报表',
    date: '2026-05-30',
    status: '公示中',
    brief: '本期公共收益收入28,600元，支出8,420元，期末结余20,180元。',
    details: [
      ['公示周期', '2026年5月'],
      ['本期收入', '28,600元'],
      ['本期支出', '8,420元'],
      ['期末结余', '20,180元']
    ],
    summary: '收入主要来自场地租赁、广告位和临停收益；支出用于公共设施维护、活动物料和公告栏更新。'
  },
  {
    id: 'fund-001',
    type: '维修资金',
    title: '2026年5月维修资金使用分析',
    date: '2026-05-29',
    status: '公示中',
    brief: '本期维修资金期初剩余1,268,000元，期中支出38,600元，累计剩余1,229,400元。',
    details: [
      ['公示周期', '2026年5月'],
      ['期初剩余金额', '1,268,000元'],
      ['期中支出总额', '38,600元'],
      ['累计剩余金额', '1,229,400元']
    ],
    summary: '资金支出主要用于消防设施修复、园区路面修补和排水管道疏通，均已完成内部审批和票据归档。'
  }
].sort((a, b) => b.date.localeCompare(a.date));

const topActions = [
  ['通知公告', '🔔', '#F56B9B'],
  ['服务动态', '✨', '#33D4B0', '大事记'],
  ['问卷投票', '☑', '#28AEE8'],
  ['物业评分', '★', '#FF9F43', '服务评分']
];

const communityActions = [
  ['企业简介', '企', '#39BFE5'],
  ['小区简介', '家', '#45D9BC']
];

const publicActions = [
  ['制度公约', '约', '#FFC84D'],
  ['服务流程', '流', '#FF6FA2'],
  ['服务内容', '服', '#5AD9B1', '服务履约'],
  ['收费方式', '收', '#7EDAF0'],
  ['费用构成', '费', '#18D8B5'],
  ['收费标准', '标', '#F9C74F'],
  ['服务标准', '准', '#40BFEF'],
  ['员工展示', '员', '#F78DB4'],
  ['公共收益', '益', '#45C8F0', '公共收益'],
  ['维修资金', '修', '#19D4A3', '维修资金'],
  ['车位情况', '车', '#F8C84E'],
  ['执法电话', '☎', '#52C3EC'],
  ['应急方案', '急', '#FBC85E'],
  ['服务月报', '报', themeColor, '工作总结']
];

let selectedType = '全部';

function formatDate(date) {
  return date.replaceAll('-', '/');
}

function switchMode(mode) {
  document.querySelectorAll('.mode-button').forEach((button) => {
    button.classList.toggle('active', button.dataset.mode === mode);
  });
  document.querySelectorAll('.view').forEach((view) => {
    view.classList.toggle('active', view.dataset.view === mode);
  });
}

function renderIconGrid(targetId, items) {
  const target = document.getElementById(targetId);
  target.innerHTML = items
    .map(([label, icon, color, type]) => `
      <button class="icon-item" type="button" ${type ? `data-open-type="${type}"` : ''}>
        <span class="icon-mark" style="background: linear-gradient(135deg, ${color}, ${color}cc)">${icon}</span>
        <span class="icon-label">${label}</span>
      </button>
    `)
    .join('');
}

function renderTypeTabs() {
  const types = ['全部', ...Object.keys(typeMeta)];
  document.getElementById('typeTabs').innerHTML = types
    .map((type) => `<button class="type-tab ${type === selectedType ? 'active' : ''}" type="button" data-type="${type}">${type}</button>`)
    .join('');
}

function renderTimeline() {
  const items = selectedType === '全部' ? disclosures : disclosures.filter((item) => item.type === selectedType);
  document.getElementById('timelineCount').textContent = `${items.length} 条`;
  document.getElementById('timelineList').innerHTML = items
    .map((item, index) => {
      const meta = typeMeta[item.type];
      return `
        <button class="timeline-item" type="button" data-open-id="${item.id}">
          <span class="timeline-rail">
            <span class="timeline-dot" style="background:${meta.color}">${meta.icon}</span>
            ${index < items.length - 1 ? '<span class="timeline-line"></span>' : ''}
          </span>
          <span class="timeline-card" style="--type-color:${meta.color}">
            <span class="timeline-meta">
              <span class="timeline-type">${meta.label}</span>
              <span>${formatDate(item.date)}</span>
            </span>
            <h4>${item.title}</h4>
            <p>${item.brief}</p>
            <footer>
              <span class="status">${item.status}</span>
              <span class="detail-link">查看详情</span>
            </footer>
          </span>
        </button>
      `;
    })
    .join('');
}

function openByType(type) {
  const item = disclosures.find((entry) => entry.type === type);
  if (item) openDrawer(item.id);
}

function openDrawer(id) {
  const item = disclosures.find((entry) => entry.id === id);
  if (!item) return;
  const meta = typeMeta[item.type];
  document.getElementById('drawerType').textContent = meta.label;
  document.getElementById('drawerType').style.background = meta.color;
  document.getElementById('drawerTitle').textContent = item.title;
  document.getElementById('drawerBody').innerHTML = `
    ${item.hasPhoto ? '<div class="photo-preview" aria-label="上传照片预览"></div>' : ''}
    <div class="detail-grid">
      ${item.details.map(([label, value]) => `
        <div class="detail-cell">
          <span>${label}</span>
          <strong>${value}</strong>
        </div>
      `).join('')}
    </div>
    <div class="summary-block">
      <span>内容摘要</span>
      <strong>${item.summary}</strong>
    </div>
  `;
  document.getElementById('drawerMask').hidden = false;
}

function closeDrawer() {
  document.getElementById('drawerMask').hidden = true;
}

function bindEvents() {
  document.querySelectorAll('.mode-button').forEach((button) => {
    button.addEventListener('click', () => switchMode(button.dataset.mode));
  });
  document.getElementById('openTimeline').addEventListener('click', () => switchMode('timeline'));
  document.body.addEventListener('click', (event) => {
    const typeButton = event.target.closest('[data-open-type]');
    if (typeButton) openByType(typeButton.dataset.openType);

    const timelineButton = event.target.closest('[data-open-id]');
    if (timelineButton) openDrawer(timelineButton.dataset.openId);

    const tab = event.target.closest('[data-type]');
    if (tab) {
      selectedType = tab.dataset.type;
      renderTypeTabs();
      renderTimeline();
    }
  });
  document.getElementById('latestTitle').addEventListener('click', () => openDrawer(disclosures[0].id));
  document.getElementById('closeDrawer').addEventListener('click', closeDrawer);
  document.getElementById('drawerMask').addEventListener('click', (event) => {
    if (event.target.id === 'drawerMask') closeDrawer();
  });
}

function init() {
  renderIconGrid('topActions', topActions);
  renderIconGrid('communityActions', communityActions);
  renderIconGrid('publicActions', publicActions);
  renderTypeTabs();
  renderTimeline();
  document.getElementById('latestDate').textContent = formatDate(disclosures[0].date);
  document.getElementById('latestTitle').textContent = disclosures[0].title;
  bindEvents();
}

init();

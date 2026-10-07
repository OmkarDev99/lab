// ══════════════════════════════════════════
// CN Lab Practicals – app.js
// ══════════════════════════════════════════

// ── Navigation ──────────────────────────
function showPractical(num, btn) {
  // Hide all practicals
  document.querySelectorAll('.practical').forEach(el => el.classList.add('hidden'));
  // Deactivate all pills
  document.querySelectorAll('.nav-pill').forEach(el => el.classList.remove('active'));

  // Show selected practical
  const target = document.getElementById('practical-' + num);
  if (target) {
    target.classList.remove('hidden');
    // Scroll main content into view smoothly
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  // Activate clicked pill
  if (btn) btn.classList.add('active');
}

// ── Tab Switching ────────────────────────
function switchTab(btn, targetId) {
  // Find parent tab-switcher & p-body
  const switcher = btn.closest('.tab-switcher');
  const body = btn.closest('.p-body');
  if (!switcher || !body) return;

  // Deactivate all tab buttons in this switcher
  switcher.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');

  // Hide all tab-content in this body
  body.querySelectorAll('.tab-content').forEach(tc => tc.classList.add('hidden'));

  // Show target tab
  const target = document.getElementById(targetId);
  if (target) target.classList.remove('hidden');
}

// ── Checklist Panel ──────────────────────
function toggleChecklist() {
  const panel = document.getElementById('checklistPanel');
  panel.classList.toggle('open');
}

// Close checklist when clicking backdrop
document.getElementById('checklistPanel').addEventListener('click', function(e) {
  if (e.target === this) toggleChecklist();
});

// Checklist progress tracking
function updateChecklistProgress() {
  const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
  const total = checkboxes.length;
  const checked = document.querySelectorAll('.check-item input[type="checkbox"]:checked').length;
  document.getElementById('checkCount').textContent = checked;
  document.getElementById('progressFill').style.width = ((checked / total) * 100) + '%';
}

document.querySelectorAll('.check-item input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', updateChecklistProgress);
});

// Persist checklist state in localStorage
function saveChecklistState() {
  const states = [];
  document.querySelectorAll('.check-item input[type="checkbox"]').forEach((cb, i) => {
    states[i] = cb.checked;
  });
  localStorage.setItem('cn-lab-checklist', JSON.stringify(states));
}

function loadChecklistState() {
  const saved = localStorage.getItem('cn-lab-checklist');
  if (!saved) return;
  const states = JSON.parse(saved);
  document.querySelectorAll('.check-item input[type="checkbox"]').forEach((cb, i) => {
    if (states[i] !== undefined) cb.checked = states[i];
  });
  updateChecklistProgress();
}

document.querySelectorAll('.check-item input[type="checkbox"]').forEach(cb => {
  cb.addEventListener('change', saveChecklistState);
});

// ── Cheat Sheet Overlay ──────────────────
function toggleCheatSheet() {
  const overlay = document.getElementById('cheatOverlay');
  overlay.classList.toggle('open');
}

// ── Copy Code Buttons ────────────────────
function copyCode(btn) {
  const block = btn.closest('.code-block');
  const code = block.querySelector('code');
  if (!code) return;

  navigator.clipboard.writeText(code.innerText).then(() => {
    const orig = btn.textContent;
    btn.textContent = '✓ Copied!';
    btn.style.color = '#34d399';
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.color = '';
    }, 1800);
  }).catch(() => {
    // Fallback for older browsers
    const textarea = document.createElement('textarea');
    textarea.value = code.innerText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    btn.textContent = '✓ Copied!';
    setTimeout(() => btn.textContent = 'Copy', 1800);
  });
}

// ── Sticky Nav shadow on scroll ──────────
window.addEventListener('scroll', () => {
  const nav = document.getElementById('quickNav');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 4px 24px rgba(0,0,0,.5)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// ── Keyboard shortcuts ───────────────────
document.addEventListener('keydown', (e) => {
  // Escape closes overlays
  if (e.key === 'Escape') {
    document.getElementById('checklistPanel').classList.remove('open');
    document.getElementById('cheatOverlay').classList.remove('open');
  }
  // Number keys 1-9, 0 for practical 10
  if (!e.ctrlKey && !e.metaKey && !e.altKey) {
    const num = parseInt(e.key);
    if (num >= 1 && num <= 9) {
      showPractical(num, document.getElementById('pill-' + num));
    }
    if (e.key === '0') {
      showPractical(10, document.getElementById('pill-10'));
    }
  }
});

// ── Init ─────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  loadChecklistState();
  // Show practical 1 by default
  showPractical(1, document.getElementById('pill-1'));
});

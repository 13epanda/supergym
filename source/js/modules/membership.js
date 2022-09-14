const membership = () => {
  const monthList = document.querySelector('.membership__months');
  document.querySelectorAll('[data-membership-item]').forEach((el) => {
    if (el.getAttribute('data-membership-item') === '1') {
      el.setAttribute('data-membership', 'visible');
    } else {
      el.setAttribute('data-membership', 'hidden');
    }
  });
  monthList.classList.remove('visually-hidden');
  document.querySelectorAll('.membership__month-text').forEach((el) => el.classList.add('visually-hidden'));

  const membershipButtons = document.querySelectorAll('[data-membership-month]');
  membershipButtons.forEach((el) => {
    el.addEventListener('click', function () {
      const membershipItem = el.getAttribute('data-membership-month');
      const membershipActive = document.querySelector('[data-membership="visible"]');

      monthList.querySelector('.is-active').classList.remove('is-active');
      el.classList.add('is-active');

      membershipActive.setAttribute('data-membership', 'hidden');
      document.querySelector(`[data-membership-item="${membershipItem}"]`).setAttribute('data-membership', 'visible');
    });
  });
};

export {membership};

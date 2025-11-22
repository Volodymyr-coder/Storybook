import { useState } from 'react';
import { Input } from './components/input/Input';
import { SidebarMenu } from './components/sidebarMenu/SidebarMenu';
import { Toast } from './components/toast/Toast';
import css from './App.module.css';

function App() {
  const [inputValue, setInputValue] = useState('');
  const [toast, setToast] = useState<{
    message: string;
    type: 'success' | 'error' | 'info';
  } | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { label: 'Home' },
    {
      label: 'Products',
      children: [{ label: 'FOOD' }, { label: 'DRINKS' }, { label: 'SNACKS' }]
    }
  ];

  const showToast = (
    message: string,
    type: 'success' | 'error' | 'info' = 'info'
  ) => {
    setToast({ message, type });
  };

  const hideToast = () => setToast(null);

  return (
    <div className={css.container}>
      <div className={css.left}>
        <Input
          type="password"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          clearable
        />
        <button
          className={css.btn}
          onClick={() => showToast('This is a toast message!', 'error')}
        >
          Toast
        </button>
        <button
          className={css.btn}
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        >
          Toggle Sidebar
        </button>
      </div>
      <div className={css.right}>
        <SidebarMenu
          items={menuItems}
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />
      </div>
      {toast && (
        <Toast
          message={toast.message}
          type={toast.type}
          duration={3000}
          onDismiss={hideToast}
        />
      )}
    </div>
  );
}

export default App;

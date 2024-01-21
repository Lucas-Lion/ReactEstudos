import React, { useState, useEffect } from 'react';
import { Table, Button, Checkbox, Input, Form } from 'antd';

function ShoppingList() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [checkedItems, setCheckedItems] = useState(JSON.parse(localStorage.getItem('checkedItems')) || []);
  const [adding, setAdding] = useState(false);
  const [addingItem, setAddingItem] = useState({ item: '', quantity: '' });

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('checkedItems', JSON.stringify(checkedItems));
  }, [items, checkedItems]);

  const removeItem = (key) => {
    setItems(items.filter((item) => item.key !== key));
  };

  const toggleChecked = (key) => {
    setCheckedItems(checkedItems.includes(key) ? checkedItems.filter(k => k !== key) : [...checkedItems, key]);
  };

  const addItem = () => {
    if (addingItem.item && addingItem.quantity) {
      setItems([...items, { ...addingItem, key: Date.now() }]);
      setAddingItem({ item: '', quantity: '' });
      setAdding(false);
    }
  };

  const columns = [
    {
      title: "Item",
      dataIndex: "item",
      key: "item",
      align: "center",
      render: (text, record) =>
        record.editable ? (
          <Input
            value={addingItem.item}
            onChange={(e) =>
              setAddingItem({ ...addingItem, item: e.target.value })
            }
          />
        ) : (
          text
        ),
    },
    {
      title: "Quantidade",
      dataIndex: "quantity",
      key: "quantity",
      align: "center",
      render: (text, record) =>
        record.editable ? (
          <Input
            value={addingItem.quantity}
            onChange={(e) =>
              setAddingItem({ ...addingItem, quantity: e.target.value })
            }
          />
        ) : (
          text
        ),
    },
    {
      title: "Status",
      key: "action",
      align: "center",
      render: (text, record) => (
        <div>
          <Checkbox
            checked={checkedItems.includes(record.key)}
            onChange={() => toggleChecked(record.key)}
          ></Checkbox>
        </div>
      ),
    },
    {
      title: "Ação",
      key: "action",
      align: "center",
      render: (text, record) => (
        <div>
          {record.editable ? (
            <Button onClick={addItem}>Salvar</Button>
          ) : (
            <Button onClick={() => removeItem(record.key)}>Remover</Button>
          )}
        </div>
      ),
    },
  ];

  return (
    <div>
      <Button className="Button" onClick={() => setAdding(true)}>
        Adicionar
      </Button>

      <Table
        className="Table"
        columns={columns}
        dataSource={
          adding ? [{ key: "adding", editable: true }, ...items] : items
        }
      />
    </div>
  );
}

export default ShoppingList;

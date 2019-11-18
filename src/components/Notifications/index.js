import React, { useState, useEffect } from 'react';
import { MdNotifications } from 'react-icons/md';
import { parseISO, formatDistance } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import api from '../../services/api';

import {
  Scroll,
  Container,
  Badge,
  Notification,
  NotificationList,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    async function loadNotification() {
      const response = await api.get('/notifications');
      setNotifications(response.data);
    }
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible} herUnread>
        <MdNotifications color="#7159c1" size={20} />
      </Badge>

      <NotificationList visible={visible}>
        <Scroll>
          <Notification unread>
            <p>Voce possui um novo agendamento</p>
            <time>Há 2 dias </time>

            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>Há 2 dias </time>

            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>Há 2 dias </time>

            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>Há 2 dias </time>

            <button type="button">Marcar como lida</button>
          </Notification>

          <Notification>
            <p>Voce possui um novo agendamento</p>
            <time>Há 2 dias </time>
            <button type="button">Marcar como lida</button>
          </Notification>
        </Scroll>
      </NotificationList>
    </Container>
  );
}

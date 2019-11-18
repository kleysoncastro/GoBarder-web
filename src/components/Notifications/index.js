import React, { useState } from 'react';
import { MdNotifications } from 'react-icons/md';

import {
  Scroll,
  Container,
  Badge,
  Notification,
  NotificationList,
} from './styles';

export default function Notifications() {
  const [visible, setVisible] = useState(false);

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

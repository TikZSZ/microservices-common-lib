# Installation

```shell
yarn add @tikzsztickets/common
```

# Usage

## Middleware

- `error-handler` middleware is used to send errors thrown in request handler as response the error must be of type `custom-error`

- `validate-request` middleware is used to validate params,body using
  express-validator library

## Errors

To create custom-error

```typescript
import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  StatusCode = 400;
  constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, BadRequestError.prototype);
  }
  serializeError() {
    return [
      {
        message: this.message,
      },
    ];
  }
}
```

## Listener

To create custom Listener

```typescript
import { Listener, Subjects, TicketCreatedEvent } from "@tikzsztickets/common";
import { queGroupName } from "./queGroupName";
import { Message } from "node-nats-streaming";
import { TicketModel } from "../../models/TicketsModel";
import nats from 'node-nats-streaming'

class TicketCreatedListener extends Listener<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
  queGroupName = queGroupName;
  async onMessage(eventData: TicketCreatedEvent["data"], msg: Message) {
    const { price, title, id} = eventData;
    try{
      await TicketModel.build({ id, title, price });
    }catch(err){
      return
    }
    msg.ack();
  }
}
// to start listening
const stan = nats.connect(clusterId,clientId,{url:url,reconnect:true,maxReconnectAttempts:500})

stan.on('connect'){
  new TicketCreatedListener(stan).listen()
}(natsClient)
```

## Publisher

```typescript
import nats from 'node-nats-streaming'

class TicketCreatedPublisher extends Publisher<TicketCreatedEvent>{
  subject: Subjects.TicketCreatedEvent = Subjects.TicketCreatedEvent
}

const stan = nats.connect(clusterId,clientId,{url:url,reconnect:true,maxReconnectAttempts:500})

stan.on('connect'){
  await new TicketCreatedPublisher(stan).publish({
      orderId:id,
      version:version,
      status: OrderStatus.Created,
      expiresAt: expiresAt.toISOString(),
      ticket:{
        ticketId: ticket.id,
        price: ticket.price
      }
    })
}


```

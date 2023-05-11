const { eventSchema } = require("../../Schemas/CinemaEvents");
const { createCanvas, registerFont } = require("canvas");
const wrap = require("word-wrap");

module.exports = {
  name: "cinema-setup",
  description: `Setup an event`,
  developer: true,
  premium: false,
  owneronly: false,
  bloxia: false,
  /**
   *
   * @param {Message} message
   * @param {*} args
   * @param {Client} client
   */
  async execute(message, args, commandName, client, Discord) {
    registerFont("Commands/Discord-Cinema/Assets/Montserrat-Bold.ttf", {
      family: "Cartoon Font",
    });

    class CartoonyCinemaTicket {
      constructor(ticketInfo) {
        this.ticketInfo = ticketInfo;
        this.width = 600;
        this.height = 300;
        this.padding = 20;
        this.logoSize = 80;
        this.circleRadius = 5;
        this.fontSize = 16;
        this.fontFamily = "Cartoon Font";
      }

      generateTicket() {
        const canvas = createCanvas(this.width, this.height);
        const ctx = canvas.getContext("2d");

        ctx.fillStyle = "#BFCA14"; // Background color
        ctx.fillRect(0, 0, this.width, this.height);

        ctx.fillStyle = "#81880C"; // Text color
        ctx.font = `${this.fontSize}px ${this.fontFamily}`;

        // Draw black border
        ctx.strokeStyle = "#111"; // Darker black border color
        ctx.lineWidth = 5;
        ctx.strokeRect(
          this.padding,
          this.padding,
          this.width - 2 * this.padding,
          this.height - 2 * this.padding
        );

        // Draw top ribbon
        ctx.fillStyle = "#F8F8FF"; // White ribbon color
        ctx.fillRect(
          this.padding,
          this.padding,
          this.width - 2 * this.padding,
          60
        );

        // Draw circles on the left border
        const circleSpacing = 20;
        const circleStartY = this.padding + 70;
        const circleEndY = this.height - this.padding - 20;
        let circleY = circleStartY;
        while (circleY < circleEndY) {
          ctx.beginPath();
          ctx.arc(
            this.padding + 15,
            circleY,
            this.circleRadius + 2,
            0,
            2 * Math.PI
          );
          ctx.fill();
          circleY += circleSpacing;
        }

        // Draw square logo in the top-right corner
        const logoX = this.width - this.padding - this.logoSize - 30;
        const logoY = this.padding + 30;
        ctx.fillStyle = "#1E1E1E"; // Square logo color
        ctx.fillRect(logoX, logoY, this.logoSize, this.logoSize);

        // Render ticket information
        const infoX = this.padding + 100;
        const infoY = this.padding + 20;

        // Draw big event name at the top
        ctx.font = `bold ${this.fontSize + 10}px ${this.fontFamily}`; // Larger and bold font
        ctx.fillText(this.ticketInfo.eventName, infoX, infoY);

        const {
          ticketId,
          username,
          eventName,
          eventId,
          guildId,
          guildName,
          dateTime,
          ticketPrice,
          eventAuthor,
          botName,
        } = this.ticketInfo;

        const text =
          `Ticket ID: ${ticketId}\n` +
          `Username: ${username}\n` +
          `Event Name: ${eventName}\n` +
          `Event ID: ${eventId}\n` +
          `Guild ID: ${guildId}\n` +
          `Guild Name: ${guildName}\n` +
          `Date and Time: ${dateTime}\n` +
          `Ticket Price: ${ticketPrice}\n` +
          `Event Author: ${eventAuthor}\n` +
          `Bot Name: ${botName}`;

        const wrappedText = wrap(text, {
          width: this.width - infoX - this.padding,
        });

        this.drawText(ctx, wrappedText, infoX, infoY);

        const outputFilePath = "Commands/Discord-Cinema/Assets/output.png"; // Replace with desired output file path

        const stream = canvas.createPNGStream();
        const out = require("fs").createWriteStream(outputFilePath);
        stream.pipe(out);

        // ...

        out.on("finish", () => {
          console.log(`Ticket image saved at ${outputFilePath}`);
        });
      }

      drawText(ctx, text, x, y) {
        const lines = text.split("\n");
        for (let i = 0; i < lines.length; i++) {
          ctx.fillText(lines[i], x, y + i * this.fontSize);
        }
      }
    }

    const ticketInfo = {
      ticketId: "123456",
      username: "John Doe",
      eventName: "Movie Night",
      eventId: "789012",
      guildId: "345678",
      guildName: "Awesome Server",
      dateTime: "2023-05-15 19:00",
      ticketPrice: "$10",
      eventAuthor: "Jane Smith",
      botName: "TicketBot",
    };

    const ticket = new CartoonyCinemaTicket(ticketInfo);
    ticket.generateTicket();

    // function generateLayout(layoutOfRow, numRows, premiumLine) {
    //   const maxGroups = 5;
    //   const seatGroups = Math.min(layoutOfRow.length, maxGroups);

    //   let layout = "";

    //   for (let row = 0; row < numRows; row++) {
    //     let line = "";

    //     for (let group = 0; group < seatGroups; group++) {
    //       line += layoutOfRow.substring(0, layoutOfRow[group]);
    //       layoutOfRow = layoutOfRow.substring(group + 1);

    //       // Add a space between groups of seats
    //       if (group !== seatGroups - 1) {
    //         line += " ";
    //       }
    //     }

    //     // Check if the current row is the premium line
    //     if (premiumLine && row === premiumLine - 1) {
    //       line = line.replace(/🪑/g, "💺");
    //     }

    //     layout += line + "\n";
    //   }

    //   return layout;
    // }

    // let filter = (m) => m.author.id === message.author.id;
    // message.channel
    //   .send(
    //     `Please enter
    // ....`
    //   )
    //   .then(() => {
    //     message.channel
    //       .awaitMessages(filter, {
    //         max: 1,
    //         time: 30000,
    //         errors: ["time"],
    //       })
    //       .then((message) => {
    //         message = message.first();
    //       })
    //       .catch((collected) => {
    //         message.channel.send("Timeout");
    //       });
    //   });
    // eventSchema.save((error, event) => {
    //   if (error) {
    //     console.error(error);
    //     message.reply("Error setting up the event.");
    //   } else {
    //     message.reply(`Event set up successfully with ID ${event_id}.`);
    //   }
    // });
  },
};

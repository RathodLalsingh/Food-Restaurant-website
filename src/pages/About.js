import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Welcome To My Resturant</Typography>
        <p>
        A restaurant is a place where people can eat and drink food, usually for a fee. The word "restaurant" comes from the French word restaurer, which means "to provide food for  establishment where refreshments or meals may be procured by the public. The public dining room that ultimately came to be known as the restaurant originated in France, and the French have continued to make major contributions to the restaurant's development.
        </p>
        <br />
        <p>
        Italian: Pasta dishes like Spaghetti Carbonara, Fettuccine Alfredo, and Risotto, along with Pizzas, and Gelato.
Chinese: Dumplings, Peking Duck, Sichuan Hot Pot, and dishes like Sweet and Sour Pork.
Indian: A range of curries Butter Chicken, Paneer Tikka Masala, Biryani, Samosas, and street foods like Chaat.
Japanese: Sushi, Ramen, Tempura, Bento boxes, and Sashimi.
Mexican: Tacos, Enchiladas, Guacamole, and street foods like Elote. Affordable eateries and casual dining spots, offering meals like burgers, pizzas, or rice bowls.Sit-down restaurants with more variety, such as pasta, steaks, and house specialties.Restaurants where the diners cook their own meals (like Korean BBQ) or where the chef prepares the meal at your table.
        </p>
      </Box>
    </Layout>
  );
};

export default About;

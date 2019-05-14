using Microsoft.EntityFrameworkCore.Migrations;

namespace ProjectUsers.Migrations
{
    public partial class EFCoreCodeFirstSampleModelsUserContextSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "FirstName", "LastName" },
                values: new object[] { 1L, "selma.kardas@gmail.com", "Selma", "Kardas" });

            migrationBuilder.InsertData(
                table: "Users",
                columns: new[] { "UserId", "Email", "FirstName", "LastName" },
                values: new object[] { 2L, "adnan.kardas@gmail.com", "Adnan", "Kardas" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 1L);

            migrationBuilder.DeleteData(
                table: "Users",
                keyColumn: "UserId",
                keyValue: 2L);
        }
    }
}

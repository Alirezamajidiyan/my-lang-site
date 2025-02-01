import { supabase } from "@/lib/supabaseClient";

// گرفتن پروژه‌ها
export async function GET() {
  try {
    // دریافت پروژه‌ها به همراه دسته‌بندی‌های مرتبط
    const { data: projects, error: projectsError } = await supabase
      .from("projects")
      .select(
        "id, title, description, image, link, project_categories(category_id)"
      );

    if (projectsError) throw projectsError;

    // دریافت دسته‌بندی‌ها
    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("*");

    if (categoriesError) throw categoriesError;

    // مپ کردن پروژه‌ها و دسته‌بندی‌های مرتبط با آن‌ها
    const formattedProjects = projects.map((project) => ({
      id: project.id,
      title: project.title,
      description: project.description,
      image: project.image,
      link: project.link,
      categories: project.project_categories
        .map((pc) => {
          const category = categories.find((cat) => cat.id === pc.category_id);
          return category ? category.name : null;
        })
        .filter(Boolean),
    }));

    return new Response(
      JSON.stringify({
        projects: formattedProjects,
        categories: categories.map((cat) => ({
          name: cat.name,
          icon: cat.icon,
        })),
      }),
      {
        headers: { "Content-Type": "application/json" },
        status: 200,
      }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

// اضافه کردن پروژه جدید (POST)
export async function POST(req) {
  try {
    const { title, description, image, link, categories } = await req.json();

    // اضافه کردن پروژه جدید به جدول projects
    const { data: newProject, error: insertError } = await supabase
      .from("projects")
      .insert([{ title, description, image, link }])
      .single();

    if (insertError) throw insertError;

    // ارتباط پروژه با دسته‌بندی‌ها
    const projectCategories = categories.map((categoryId) => ({
      project_id: newProject.id,
      category_id: categoryId,
    }));

    // اضافه کردن ارتباطات دسته‌بندی‌ها به جدول project_categories
    const { error: categoryError } = await supabase
      .from("project_categories")
      .upsert(projectCategories);

    if (categoryError) throw categoryError;

    return new Response(JSON.stringify({ project: newProject }), {
      status: 201,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

// ویرایش پروژه (PUT)
export async function PUT(req) {
  try {
    const { id, title, description, image, link, categories } =
      await req.json();

    // ویرایش پروژه در جدول projects
    const { data: updatedProject, error: updateError } = await supabase
      .from("projects")
      .update({ title, description, image, link })
      .eq("id", id)
      .single();

    if (updateError) throw updateError;

    // حذف ارتباطات قبلی با دسته‌بندی‌ها
    await supabase.from("project_categories").delete().eq("project_id", id);

    // اضافه کردن دسته‌بندی‌های جدید
    const projectCategories = categories.map((categoryId) => ({
      project_id: updatedProject.id,
      category_id: categoryId,
    }));

    const { error: categoryError } = await supabase
      .from("project_categories")
      .upsert(projectCategories);

    if (categoryError) throw categoryError;

    return new Response(JSON.stringify({ project: updatedProject }), {
      status: 200,
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}

// حذف پروژه (DELETE)
export async function DELETE(req) {
  try {
    const { id } = await req.json();

    // حذف پروژه از جدول projects
    const { error: deleteError } = await supabase
      .from("projects")
      .delete()
      .eq("id", id);

    if (deleteError) throw deleteError;

    // حذف ارتباطات پروژه با دسته‌بندی‌ها
    await supabase.from("project_categories").delete().eq("project_id", id);

    return new Response(
      JSON.stringify({ message: "Project deleted successfully" }),
      { status: 200 }
    );
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
    });
  }
}
